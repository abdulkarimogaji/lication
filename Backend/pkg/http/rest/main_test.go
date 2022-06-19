package rest

import (
	"log"
	"os"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/lication/pkg/creating"
	"github.com/lication/pkg/health"
	"github.com/lication/pkg/listing"
	"github.com/lication/pkg/storage/mongo"
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
	ls := listing.NewService(store)

	testRouter = ConfigureRoutes(h, cr, ls)
	os.Exit(m.Run())
}
