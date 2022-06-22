package creating

import (
	"time"

	"github.com/lication/pkg/listing"
)

type Service interface {
	CreateUser(*User) (listing.User, error)
	UpdateUser(*User) (listing.User, error)
	CreateChat(*Chat) (listing.Chat, error)
	CreateMessage(*Message) (listing.Message, error)
	// SendMessage(Message) Message
	// CreateGroup(Group) Group
}

type Repository interface {
	CreateUser(*listing.User) (listing.User, error)
	UpdateUser(*listing.User) (listing.User, error)
	CreateChat(newChat *listing.Chat, first_message_text string) (listing.Chat, error)
	CreateMessage(msg *listing.Message) (listing.Message, error)
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

func (s *service) CreateChat(chat *Chat) (listing.Chat, error) {
	newChat := &listing.Chat{
		FirstParty:  chat.FirstParty,
		SecondParty: chat.SecondParty,
		ChatType:    chat.ChatType,
		ChatName:    chat.ChatName,
		ChatImage:   chat.ChatImage,
		CreatedAt:   time.Now().UTC(),
		UpdatedAt:   time.Now().UTC(),
	}

	return s.r.CreateChat(newChat, chat.FirstMessageText)
}

func (s *service) CreateMessage(msg *Message) (listing.Message, error) {
	newMsg := &listing.Message{
		Text:        msg.Text,
		MessageType: msg.MessageType,
		Sender:      msg.Sender,
		Chat:        msg.Chat,
		CreatedAt:   time.Now().UTC(),
	}
	return s.r.CreateMessage(newMsg)
}
