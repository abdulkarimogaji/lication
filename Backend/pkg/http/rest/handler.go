package rest

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/whatslication/pkg/creating"
	"github.com/whatslication/pkg/health"
)

func Handler(h health.Service, c creating.Service) *gin.Engine {
	router := gin.Default()
	router.GET("/health", healthCheck(h))
	router.POST("/users", createUser(c))
	return router
}

func healthCheck(s health.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		success := s.PingDB()
		if success {
			c.JSON(http.StatusOK, gin.H{
				"data":  nil,
				"error": nil,
			})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{
				"data":  nil,
				"error": "failed to ping mongo database",
			})
		}

	}
}
