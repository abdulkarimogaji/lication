package config

import (
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	DbUri  string
	AppEnv string
}

var Conf Config

func LoadConfig() error {
	godotenv.Load()
	Conf.DbUri = os.Getenv("DB_CONNECTION_URI")
	Conf.AppEnv = os.Getenv("APP_ENV")

	if Conf.AppEnv == "local" {
		Conf.DbUri = "mongodb://lication:lication@localhost:8000/lication?authSource=admin"
	}
	return nil
}
