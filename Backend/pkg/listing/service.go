package listing

type Service interface {
	GetUser(userId string) (User, error)
	GetAllUserChats(user_phone string) ([]Chat, error)
}

type Repository interface {
	GetUser(userId string) (User, error)
	GetAllUserChats(user_phone string) ([]Chat, error)
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

func (s *service) GetAllUserChats(user_phone string) ([]Chat, error) {
	return s.r.GetAllUserChats(user_phone)
}
