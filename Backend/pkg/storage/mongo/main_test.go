package mongo

import (
	"log"
	"os"
	"testing"
)

var testStorage *Storage

func TestMain(m *testing.M) {
	s, err := NewStorage()
	if err != nil {
		log.Fatal("Failed to connect to mongo database ", err)
	}
	testStorage = s
	os.Exit(m.Run())
}
