package mongo

import (
	"context"
	"time"

	"github.com/lication/pkg/config"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func NewStorage() (*Storage, error) {
	client, err := mongo.NewClient(options.Client().ApplyURI(config.Conf.DbUri))
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
	DB := client.Database("lication")
	users := DB.Collection("users")
	chats := DB.Collection("chats")
	messages := DB.Collection("messages")

	return &Storage{
		users:    users,
		chats:    chats,
		messages: messages,
	}, nil
}
