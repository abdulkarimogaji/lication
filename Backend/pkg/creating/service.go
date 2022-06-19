package creating

import (
	"time"

	"github.com/lication/pkg/listing"
)

type Service interface {
	CreateUser(*User) (listing.User, error)
	UpdateUser(*User) (listing.User, error)
	// SendMessage(Message) Message
	// CreateGroup(Group) Group
}

type Repository interface {
	CreateUser(*listing.User) (listing.User, error)
	UpdateUser(*listing.User) (listing.User, error)
	// CreateMessage(Message) Message
	// CreateGroup(Group) Group
}

type service struct {
	r Repository
}

func NewService(r Repository) Service {
	return &service{r}
}

func (s *service) CreateUser(user *User) (listing.User, error) {
	insert := &listing.User{
		Name:      user.Name,
		Phone:     user.Phone,
		Password:  user.Password,
		Email:     user.Email,
		Username:  user.Username,
		CreatedAt: time.Now().UTC(),
		UpdatedAt: time.Now().UTC(),
	}
	newUser, err := s.r.CreateUser(insert)
	// parse error here
	return newUser, err
}

func (s *service) UpdateUser(user *User) (listing.User, error) {
	update := &listing.User{
		Id:       user.Id,
		Name:     user.Name,
		Phone:    user.Phone,
		Email:    user.Email,
		Username: user.Username,
	}
	return s.r.UpdateUser(update)
}
