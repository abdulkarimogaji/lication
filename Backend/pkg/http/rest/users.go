package rest

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/lication/pkg/creating"
)

func loginUser(cr creating.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		// some request body validation here
		var req creating.User
		err := c.ShouldBindWith(&req, binding.JSON)
		if err != nil {
			log.Println(err)
			badRequestResponse(c, err)
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

func updateUser(cr creating.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		var req creating.User
		err := c.ShouldBindWith(&req, binding.JSON)
		if err != nil {
			badRequestResponse(c, err)
			return
		}
		user, err := cr.UpdateUser(&req)
		if err != nil {
			errorResponse(c, err)
			return
		}
		c.JSON(http.StatusCreated, gin.H{
			"data":  user,
			"error": nil,
		})

	}
}
