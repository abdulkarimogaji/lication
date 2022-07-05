package listing

import (
	"encoding/json"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Message struct {
	Id          primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Text        string             `bson:"text" json:"text"`
	Sender      string             `bson:"sender" json:"sender"`
	Chat        primitive.ObjectID `bson:"chat" json:"chat"`
	CreatedAt   time.Time          `bson:"created_at" json:"created_at"`
	MessageType string             `bson:"message_type" json:"message_type"`
}

func (m Message) MarshalJSON() ([]byte, error) {
	if m.Id.IsZero() {
		return []byte("null"), nil
	}
	return json.Marshal(&struct {
		Id          primitive.ObjectID `bson:"_id,omitempty" json:"id"`
		Text        string             `bson:"text" json:"text"`
		Sender      string             `bson:"sender" json:"sender"`
		Chat        primitive.ObjectID `bson:"chat" json:"chat"`
		CreatedAt   time.Time          `bson:"created_at" json:"created_at"`
		MessageType string             `bson:"message_type" json:"message_type"`
	}{
		m.Id, m.Text, m.Sender, m.Chat, m.CreatedAt, m.MessageType,
	})
}
