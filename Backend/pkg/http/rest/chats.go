package rest

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/lication/pkg/creating"
	"github.com/lication/pkg/listing"
)

func createChat(cr creating.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		var req creating.Chat
		err := c.ShouldBindWith(&req, binding.JSON)
		if err != nil {
			badRequestResponse(c, err)
			return
		}
		result, err := cr.CreateChat(&req)

		if err != nil {
			errorResponse(c, err)
			return
		}
		c.JSON(http.StatusCreated, gin.H{
			"data":  result,
			"error": nil,
		})
	}
}

func createMessage(cr creating.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		var req creating.Message

		err := c.ShouldBindWith(&req, binding.JSON)
		if err != nil {
			badRequestResponse(c, err)
			return
		}

		result, err := cr.CreateMessage(&req)

		if err != nil {
			errorResponse(c, err)
			return
		}

		c.JSON(http.StatusCreated, gin.H{
			"data":  result,
			"error": nil,
		})
	}
}

func getAllUserChats(l listing.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		user_phone := c.Param("user_phone")

		result, err := l.GetAllUserChats(user_phone)

		if err != nil {
			errorResponse(c, err)
			return
		}
		c.JSON(http.StatusOK, gin.H{
			"data":  result,
			"error": nil,
		})
	}
}

func getChatById(l listing.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		chatId := c.Param("chat_id")

		result, err := l.GetChatById(chatId)

		if err != nil {
			errorResponse(c, err)
			return
		}
		c.JSON(http.StatusOK, gin.H{
			"data":  result,
			"error": nil,
		})
	}
}
