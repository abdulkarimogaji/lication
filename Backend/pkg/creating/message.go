package creating

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Message struct {
	Text        string             `json:"text" binding:"required"`
	Sender      string             `json:"sender" binding:"required,e164"`
	Chat        primitive.ObjectID `json:"chat" binding:"required"`
	MessageType string             `json:"message_type" binding:"required"`
}
