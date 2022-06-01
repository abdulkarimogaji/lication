package creating

import "time"

type User struct {
	Name      string    `json:"name" binding:"required"`
	Phone     string    `json:"phone" binding:"required,e164"`
	Email     string    `json:"email" binding:"required,email"`
	Username  string    `json:"username" binding:"required"`
	Password  string    `json:"password" binding:"required,min=6"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`
}
