package listing

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Chat struct {
	Id          primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	FirstParty  string             `json:"first_party" bson:"first_party"`
	SecondParty string             `json:"second_party" bson:"second_party"`
	ChatType    string             `json:"chat_type" bson:"chat_type"`
	ChatName    string             `json:"chat_name" bson:"chat_name"`
	ChatImage   string             `json:"chat_image" bson:"chat_image"`
	// for fetching a list of chats
	LastMessage Message `bson:"last_message,omitempty" json:"last_message,omitempty"`
	// for fetching a single chat
	Messages  []Message `bson:"messages,omitempty" json:"messages"`
	CreatedAt time.Time `bson:"created_at" json:"created_at"`
	UpdatedAt time.Time `bson:"updated_at" json:"updated_at"`
}
