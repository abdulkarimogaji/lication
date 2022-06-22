package mongo

import (
	"context"

	"go.mongodb.org/mongo-driver/mongo"
)

type Storage struct {
	users    *mongo.Collection
	chats    *mongo.Collection
	messages *mongo.Collection
}

func (m *Storage) PingDB() error {
	ctx := context.Background()
	return m.users.Database().Client().Ping(ctx, nil)
}
