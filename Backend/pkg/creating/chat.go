package creating

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Chat struct {
	FirstParty  primitive.ObjectID `json:"first_party" binding:"required"`
	SecondParty primitive.ObjectID `json:"second_party" binding:"required"`

	ChatType         string `json:"chat_type" binding:"required"`
	ChatName         string `json:"chat_name"`
	ChatImage        string `json:"chat_image"`
	FirstMessageText string `json:"first_message_text" binding:"required"`
}
