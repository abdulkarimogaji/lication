package creating

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	Id        primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Name      string             `json:"name" binding:"required"`
	Phone     string             `json:"phone" binding:"required,e164"`
	Email     string             `json:"email" binding:"required,email"`
	Username  string             `json:"username" binding:"required"`
	Password  string             `json:"password" binding:"required,min=6"`
	CreatedAt time.Time          `json:"-"`
	UpdatedAt time.Time          `json:"-"`
}
