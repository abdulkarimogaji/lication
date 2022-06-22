package listing

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	Id          primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	DisplayName string             `bson:"display_name" json:"display_name"`
	Phone       string             `bson:"phone" json:"phone"`
	Email       string             `bson:"email" json:"email"`
	CreatedAt   time.Time          `bson:"created_at" json:"created_at"`
	UpdatedAt   time.Time          `bson:"updated_at" json:"updated_at"`
	Password    string             `bson:"password" json:"-"`
}
