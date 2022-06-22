package listing

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Message struct {
	Id          primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Text        string             `bson:"text" json:"text"`
	Sender      primitive.ObjectID `bson:"sender" json:"sender"`
	Chat        primitive.ObjectID `bson:"chat" json:"chat"`
	CreatedAt   time.Time          `bson:"created_at" json:"created_at"`
	MessageType string             `bson:"message_type" json:"message_type"`
}
