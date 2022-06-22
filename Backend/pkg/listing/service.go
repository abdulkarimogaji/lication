package listing

import "go.mongodb.org/mongo-driver/bson/primitive"

type Service interface {
	GetUser(userId string) (User, error)
	GetAllUserChats(user primitive.ObjectID) ([]Chat, error)
}

type Repository interface {
	GetUser(userId string) (User, error)
	GetAllUserChats(user primitive.ObjectID) ([]Chat, error)
	// CreateMessage(Message) Message
	// CreateGroup(Group) Group
}

type service struct {
	r Repository
}

func NewService(r Repository) Service {
	return &service{r}
}

func (s *service) GetUser(userId string) (User, error) {
	user, err := s.r.GetUser(userId)
	return user, err
}

func (s *service) GetAllUserChats(user primitive.ObjectID) ([]Chat, error) {
	return s.r.GetAllUserChats(user)
}
