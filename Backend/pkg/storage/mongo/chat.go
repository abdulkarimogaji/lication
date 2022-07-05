package mongo

import (
	"context"
	"log"
	"time"

	"github.com/lication/pkg/listing"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func (m *Storage) CreateChat(newChat *listing.Chat, first_message_text, first_message_sender string) (listing.Chat, error) {
	ctx := context.Background()
	// make the first and second parties unique
	m.chats.Indexes().CreateOne(
		ctx,
		mongo.IndexModel{
			Keys:    bson.D{{Key: "first_party", Value: 1}, {Key: "second_party", Value: 1}},
			Options: options.Index().SetUnique(true),
		},
	)
	r, err := m.chats.InsertOne(ctx, newChat)
	// get chat back
	var result listing.Chat
	if mongo.IsDuplicateKeyError(err) {
		matchStage := bson.D{{Key: "$match", Value: bson.D{{Key: "$expr", Value: bson.D{{Key: "$and", Value: bson.A{bson.M{"first_party": newChat.FirstParty}, bson.M{"second_party": newChat.SecondParty}}}}}}}}
		lookupStage := bson.D{{Key: "$lookup", Value: bson.D{{Key: "from", Value: "messages"}, {Key: "localField", Value: "_id"}, {Key: "foreignField", Value: "chat"}, {Key: "as", Value: "messages"}}}}
		pipeline := bson.A{matchStage, lookupStage}
		cursor, err := m.chats.Aggregate(ctx, pipeline)
		if err != nil {
			return listing.Chat{}, err
		}
		defer cursor.Close(ctx)
		for cursor.Next(ctx) {
			err = cursor.Decode(&result)
		}
		return result, err
	}
	if err != nil {
		return listing.Chat{}, err
	}

	// create first message
	msg, err := m.CreateMessage(&listing.Message{
		Text:        first_message_text,
		Sender:      first_message_sender,
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
	result.Messages = []listing.Message{}
	return result, err
}

func (m *Storage) CreateMessage(newMessage *listing.Message) (listing.Message, error) {
	ctx := context.Background()
	// check if chat exists first
	err := m.chats.FindOne(ctx, bson.M{"_id": newMessage.Chat}).Err()
	if err != nil {
		return listing.Message{}, err
	}
	r, err := m.messages.InsertOne(ctx, newMessage)
	if err != nil {
		return listing.Message{}, err
	}
	var result listing.Message
	err = m.messages.FindOne(ctx, bson.M{"_id": r.InsertedID}).Decode(&result)
	return result, err
}

func (m *Storage) GetAllUserChats(user_phone string) ([]listing.Chat, error) {
	ctx := context.Background()
	matchStage := bson.D{{Key: "$match", Value: bson.D{{Key: "$expr", Value: bson.D{{Key: "$or", Value: bson.A{bson.M{"$eq": bson.A{"$first_party", user_phone}}, bson.M{"$eq": bson.A{"$second_party", user_phone}}}}}}}}}
	lookupLastMessage := bson.D{
		{Key: "$lookup", Value: bson.D{
			{Key: "from", Value: "messages"},
			{Key: "let", Value: bson.D{{Key: "chatId", Value: "$_id"}}},
			{Key: "pipeline", Value: bson.A{
				bson.D{{Key: "$match", Value: bson.M{"$expr": bson.M{"$eq": bson.A{"$chat", "$$chatId"}}}}},
				bson.D{{Key: "$sort", Value: bson.D{{Key: "created_at", Value: -1}}}},
				bson.D{{Key: "$limit", Value: 1}},
			},
			},
			{Key: "as", Value: "last_message"},
		},
		},
	}
	unwindLastMessage := bson.D{{Key: "$unwind", Value: bson.M{"path": "$last_message"}}}
	sortStage := bson.D{{Key: "$sort", Value: bson.D{{Key: "updated_at", Value: -1}}}}
	pipeline := bson.A{matchStage, sortStage, lookupLastMessage, unwindLastMessage}
	cursor, err := m.chats.Aggregate(ctx, pipeline)
	if err != nil {
		return []listing.Chat{}, err
	}

	result := []listing.Chat{}
	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var chat listing.Chat
		chat.Messages = []listing.Message{}
		err = cursor.Decode(&chat)
		if err != nil {
			log.Println("decode: ", err)
			return result, err
		}
		result = append(result, chat)
	}
	return result, nil
}

func (m *Storage) GetChatById(chatId primitive.ObjectID) (listing.Chat, error) {
	ctx := context.Background()
	matchStage := bson.D{{Key: "$match", Value: bson.M{"$expr": bson.M{"$eq": bson.A{"$_id", chatId}}}}}
	lookupMessages := bson.M{"$lookup": bson.D{{Key: "from", Value: "messages"}, {Key: "let", Value: bson.D{{Key: "chatId", Value: "$_id"}}}, {Key: "pipeline", Value: bson.A{bson.D{{Key: "$match", Value: bson.M{"$expr": bson.M{"$eq": bson.A{"$chat", "$$chatId"}}}}}, bson.D{{Key: "$sort", Value: bson.D{{Key: "created_at", Value: 1}}}}}}, {Key: "as", Value: "messages"}}}
	pipeline := bson.A{matchStage, lookupMessages}
	cursor, err := m.chats.Aggregate(ctx, pipeline)
	if err != nil {
		return listing.Chat{}, err
	}
	result := listing.Chat{}
	cursor.TryNext(ctx)
	err = cursor.Decode(&result)
	if err != nil {
		return result, err
	}
	return result, nil
}
