package mongo

import (
	"context"

	"github.com/lication/pkg/listing"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"gopkg.in/mgo.v2/bson"
)

func (m *Storage) CreateUser(user *listing.User) (listing.User, error) {
	ctx := context.Background()
	r, err := m.users.InsertOne(ctx, user)
	if err != nil {
		return listing.User{}, err
	}
	var newUser listing.User
	err = m.users.FindOne(ctx, bson.M{"_id": r.InsertedID.(primitive.ObjectID)}).Decode(&newUser)

	return newUser, err
}

func (m *Storage) UpdateUser(user *listing.User) (listing.User, error) { return listing.User{}, nil }

func (m *Storage) GetUser(userId string) (listing.User, error) { return listing.User{}, nil }

func (m *Storage) GetUsersByPhoneNumbers(nums ...string) ([]listing.User, error) {
	return []listing.User{}, nil
}
