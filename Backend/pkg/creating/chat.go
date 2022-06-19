package creating

type Chat struct {
	Id   string `bson:"_id" json:"id"`
	User string `json:"user"`
	// group or another user
	Receiver []string `json:"receiver"`
	// chat name
	Name string `json:"name"`
}
