package main

import (
	"log"

	"github.com/lication/pkg/config"
	"github.com/lication/pkg/creating"
	"github.com/lication/pkg/health"
	"github.com/lication/pkg/http/rest"
	"github.com/lication/pkg/listing"
	"github.com/lication/pkg/storage/mongo"
)

func main() {

	err := config.LoadConfig()
	if err != nil {
		log.Fatal("Failed to load Config files ", err)
	}
	s, err := mongo.NewStorage()
	if err != nil {
		log.Fatal("Failed to connect to the database ", err)
	}
	health := health.NewService(s)
	cr := creating.NewService(s)
	ls := listing.NewService(s)

	router := rest.ConfigureRoutes(health, cr, ls)
	router.Run()
}
