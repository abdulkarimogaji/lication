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
	r.POST("/users", createUser(c))
	r.PUT("/users", updateUser(c))
	// r.GET("/users/:id", getUserById(ls))
	// r.POST("/messages", createMessage(c))
	// r.POST("/chats", createChat(c))
	// r.GET("/user/chats", getAllUserChats(l))
	// r.GET("chats/:id", getChatById(l))
	return r
}
