package mongo

import (
	"context"
	"time"

	"github.com/lication/pkg/listing"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func (m *Storage) CreateChat(newChat *listing.Chat, first_message_text string) (listing.Chat, error) {
	ctx := context.Background()
	// make the first and second parties unique
	m.chats.Indexes().CreateMany(
		ctx,
		[]mongo.IndexModel{{
			Keys:    bson.D{{Key: "first_party", Value: 1}, {Key: "second_party", Value: 1}},
			Options: options.Index().SetUnique(true),
		},
		},
	)
	r, err := m.chats.InsertOne(ctx, newChat)
	// get chat back
	var result listing.Chat
	if mongo.IsDuplicateKeyError(err) {
		err = m.chats.FindOne(ctx, bson.M{"first_party": newChat.FirstParty, "second_party": newChat.SecondParty}).Decode(&result)
		if err != nil {
			return listing.Chat{}, err
		}
		return result, nil
	}
	if err != nil {
		return listing.Chat{}, err
	}

	// create first message
	msg, err := m.CreateMessage(&listing.Message{
		Text:        first_message_text,
		Sender:      newChat.FirstParty,
		Chat:        r.InsertedID.(primitive.ObjectID),
		MessageType: "TEXT",
		CreatedAt:   time.Now().UTC(),
	})

	if err != nil {
		return listing.Chat{}, err
	}

	err = m.chats.FindOne(ctx, bson.M{"_id": r.InsertedID}).Decode(&result)
	if err != nil {
		return listing.Chat{}, err
	}

	result.LastMessage = msg
	return result, err
}

func (m *Storage) CreateMessage(newMessage *listing.Message) (listing.Message, error) {
	ctx := context.Background()
	r, err := m.messages.InsertOne(ctx, newMessage)
	if err != nil {
		return listing.Message{}, err
	}
	var result listing.Message
	err = m.messages.FindOne(ctx, bson.M{"_id": r.InsertedID}).Decode(&result)
	return result, err
}

func (m *Storage) GetAllUserChats(user primitive.ObjectID) ([]listing.Chat, error) {
	ctx := context.Background()
	matchStage := bson.D{{Key: "$match", Value: bson.D{{Key: "$expr", Value: bson.D{{Key: "$or", Value: bson.A{bson.M{"first_party": user}, bson.M{"second_party": user}}}}}}}}
	lookupStage := bson.D{{Key: "$lookup", Value: bson.D{{Key: "from", Value: "messages"}, {Key: "localField", Value: "_id"}, {Key: "foreignField", Value: "chat"}, {Key: "as", Value: "last_message"}}}}
	sortStage := bson.D{{Key: "$sort", Value: bson.D{{Key: "created_at", Value: -1}}}}
	limitStage := bson.D{{Key: "$limit", Value: 1}}
	unwindStage := bson.D{{Key: "$unwind", Value: bson.D{{Key: "path", Value: "$last_message"}, {Key: "preserveNullAndEmptyArrays", Value: false}}}}
	pipeline := bson.A{matchStage, lookupStage, sortStage, limitStage, unwindStage}
	cursor, err := m.chats.Aggregate(ctx, pipeline)
	if err != nil {
		return []listing.Chat{}, err
	}

	var result []listing.Chat
	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var chat listing.Chat
		err = cursor.Decode(&chat)
		if err != nil {
			return result, err
		}
		result = append(result, chat)
	}
	return result, nil
}
