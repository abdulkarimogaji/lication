package creating

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Message struct {
	Text        string             `json:"text" binding:"required"`
	Sender      primitive.ObjectID `json:"sender" binding:"required"`
	Chat        primitive.ObjectID `json:"chat" binding:"required"`
	MessageType string             `json:"message_type" binding:"required"`
}
