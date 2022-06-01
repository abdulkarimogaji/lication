package mongo

import (
	"context"
	"time"

	"github.com/whatslication/pkg/listing"
	"gopkg.in/mgo.v2/bson"
)

func (m *Storage) CreateUser(user *listing.User) (listing.User, error) {
	user.CreatedAt = time.Now().UTC()
	user.UpdatedAt = time.Now().UTC()
	ctx := context.Background()
	r, err := m.users.InsertOne(ctx, user)
	if err != nil {
		return listing.User{}, err
	}
	var newUser listing.User
	err = m.users.FindOne(ctx, bson.M{"_id": r.InsertedID}).Decode(&newUser)

	return newUser, err
}
