package rest

import (
	"log"
	"os"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/whatslication/pkg/creating"
	"github.com/whatslication/pkg/health"
	"github.com/whatslication/pkg/storage/mongo"
)

var testRouter *gin.Engine

func TestMain(m *testing.M) {
	gin.SetMode(gin.TestMode)
	store, err := mongo.NewStorage()
	if err != nil {
		log.Fatal("Failed to connect to the database", err)
	}
	h := health.NewService(store)
	cr := creating.NewService(store)
	testRouter = Handler(h, cr)
	os.Exit(m.Run())
}
