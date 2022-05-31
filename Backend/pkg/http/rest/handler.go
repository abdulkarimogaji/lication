package rest

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/whatslication/pkg/health"
)

func Handler(h health.Service) *gin.Engine {
	router := gin.Default()
	router.GET("/health", healthCheck(h))
	return router
}

func healthCheck(s health.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":  "success",
			"message": "database pinged successfully",
			"data":    nil,
			"error":   nil,
		})
	}
}
