package listing

type Service interface {
	GetUser(userId string) (User, error)
	// SendMessage(Message) Message
	// CreateGroup(Group) Group
}

type Repository interface {
	GetUser(userId string) (User, error)
	GetUsersByPhoneNumbers(nums ...string) ([]User, error)
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
