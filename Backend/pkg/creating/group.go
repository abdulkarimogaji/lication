package creating

import "time"

type Group struct {
	Id           string
	Name         string
	Description  string
	Participants []string
	CreatedBy    string
	CreatedAt    time.Time
	UpdatedAt    time.Time
}
