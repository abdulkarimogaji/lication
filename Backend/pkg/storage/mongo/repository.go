package mongo

import (
	"context"

	"go.mongodb.org/mongo-driver/mongo"
)

type Storage struct {
	db *mongo.Database
}

func (m *Storage) PingDB() error {
	ctx := context.Background()
	return m.db.Client().Ping(ctx, nil)
}
