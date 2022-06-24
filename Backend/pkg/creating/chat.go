package creating

type Chat struct {
	FirstParty  string `json:"first_party" binding:"required,e164"`
	SecondParty string `json:"second_party" binding:"required,e164"`

	ChatType         string `json:"chat_type" binding:"required"`
	ChatName         string `json:"chat_name"`
	ChatImage        string `json:"chat_image"`
	FirstMessageText string `json:"first_message_text" binding:"required"`
}
