package creating

import "time"

type Message struct {
	Id        string
	Sender    string
	Reciever  string
	Type      string
	Text      string
	CreatedAt time.Time
}
