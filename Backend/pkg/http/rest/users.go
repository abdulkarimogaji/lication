package rest

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/whatslication/pkg/creating"
)

func createUser(cr creating.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		// some request body validation here
		var req creating.User
		err := c.ShouldBindWith(&req, binding.JSON)
		if err != nil {
			errorResponse(c, err)
			return
		}
		newUser, err := cr.CreateUser(&req)
		if err != nil {
			errorResponse(c, err)
			return
		}
		c.JSON(http.StatusCreated, gin.H{
			"data":  newUser,
			"error": nil,
		})
	}
}
