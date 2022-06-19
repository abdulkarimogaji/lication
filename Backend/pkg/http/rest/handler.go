package rest

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/lication/pkg/health"
)

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
