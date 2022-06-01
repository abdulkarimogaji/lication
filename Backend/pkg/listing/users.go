package listing

import "time"

type User struct {
	Id        string    `bson:"_id,omitempty" json:"id"`
	Name      string    `bson:"name" json:"name"`
	Phone     string    `bson:"phone" json:"phone"`
	Email     string    `bson:"email" json:"email"`
	Username  string    `bson:"username" json:"username"`
	CreatedAt time.Time `bson:"created_at" json:"created_at"`
	UpdatedAt time.Time `bson:"updated_at" json:"updated_at"`
	Password  string    `bson:"password" json:"-"`
}
