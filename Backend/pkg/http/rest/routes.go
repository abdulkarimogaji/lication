package rest

import (
	"github.com/gin-gonic/gin"
	"github.com/lication/pkg/creating"
	"github.com/lication/pkg/health"
	"github.com/lication/pkg/listing"
)

func ConfigureRoutes(h health.Service, c creating.Service, l listing.Service) *gin.Engine {
	r := gin.Default()
	r.GET("/health", healthCheck(h))
	r.POST("/login", loginUser(c))
	r.PUT("/users", updateUser(c))
	r.POST("/chats", createChat(c))
	r.GET("/chats/:chat_id", getChatById(l))
	r.POST("/messages", createMessage(c))
	r.GET("/:user_phone/chats", getAllUserChats(l))
	return r
}
