package creating

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	Id       primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Name     string             `json:"name"`
	Phone    string             `json:"phone" binding:"required,e164"`
	Email    string             `json:"email" binding:"omitempty,email"`
	Username string             `json:"username"`
	Password string             `json:"password" binding:"omitempty,min=6"`
}
