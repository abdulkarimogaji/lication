package creating

type Message struct {
	Id   string `json:"id"`
	Text string `json:"text"`
	// chat id
	Chat   string `json:"chat"`
	Sender string `sender:"sender"`
}
