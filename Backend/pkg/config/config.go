package config

import (
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	DbUri string
}

var Conf Config

func LoadConfig() error {
	err := godotenv.Load()
	if err != nil {
		return err
	}
	Conf.DbUri = os.Getenv("DB_CONNECTION_URI")
	return nil
}
