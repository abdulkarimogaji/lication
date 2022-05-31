package health

import "log"

type Service interface {
	PingDB() bool
}
type Repository interface {
	PingDB() error
}

type service struct {
	r Repository
}

// NewService creates an adding service with the necessary dependencies
func NewService(r Repository) Service {
	return &service{r}
}

func (s *service) PingDB() bool {
	err := s.r.PingDB()
	if err != nil {
		// some logging stuff here
		log.Println(err)
		return false
	}
	return true
}
