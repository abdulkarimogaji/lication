package mongo

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const uri = "mongodb://whatslication:whatslication@localhost:8000/whatslication?authSource=admin"

func NewStorage() (*Storage, error) {
	client, err := mongo.NewClient(options.Client().ApplyURI(uri))
	if err != nil {
		return &Storage{}, err
	}
	ctx := context.Background()
	ctx, cancel := context.WithTimeout(ctx, 10*time.Second)
	defer cancel()
	err = client.Connect(ctx)
	if err != nil {
		return &Storage{}, err
	}
	DB := client.Database("whatslication")

	users := DB.Collection("users")

	return &Storage{
		users: users,
	}, err
}
