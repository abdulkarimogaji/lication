package listing

import "go.mongodb.org/mongo-driver/bson/primitive"

type Service interface {
	GetUser(userId string) (User, error)
	GetAllUserChats(user_phone string) ([]Chat, error)
	GetChatById(chatId string) (Chat, error)
}

type Repository interface {
	GetUser(userId primitive.ObjectID) (User, error)
	GetAllUserChats(user_phone string) ([]Chat, error)
	GetChatById(chatId primitive.ObjectID) (Chat, error)
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
	id, err := primitive.ObjectIDFromHex(userId)
	if err != nil {
		return User{}, err
	}
	return s.r.GetUser(id)

}

func (s *service) GetAllUserChats(user_phone string) ([]Chat, error) {
	return s.r.GetAllUserChats(user_phone)
}

func (s *service) GetChatById(chatId string) (Chat, error) {
	id, err := primitive.ObjectIDFromHex(chatId)
	if err != nil {
		return Chat{}, err
	}
	return s.r.GetChatById(id)
}
