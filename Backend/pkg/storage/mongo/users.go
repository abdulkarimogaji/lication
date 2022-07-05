package mongo

import (
	"context"

	"github.com/lication/pkg/listing"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func (m *Storage) CreateUser(user *listing.User) (listing.User, error) {
	ctx := context.Background()

	// make phone number field unique
	m.users.Indexes().CreateOne(
		ctx,
		mongo.IndexModel{
			Keys:    bson.D{{Key: "phone", Value: 1}},
			Options: options.Index().SetUnique(true),
		},
	)
	var newUser listing.User

	r, err := m.users.InsertOne(ctx, user)

	if mongo.IsDuplicateKeyError(err) {
		err = m.users.FindOne(ctx, bson.M{"phone": user.Phone}).Decode(&newUser)
		if err != nil {
			return listing.User{}, err
		}
		return newUser, nil
	}

	if err != nil {
		return listing.User{}, err
	}

	err = m.users.FindOne(ctx, bson.M{"_id": r.InsertedID.(primitive.ObjectID)}).Decode(&newUser)
	if err != nil {
		return listing.User{}, err
	}

	return newUser, nil
}

func (m *Storage) UpdateUser(user *listing.User) (listing.User, error) { return listing.User{}, nil }

func (m *Storage) GetUser(userId primitive.ObjectID) (listing.User, error) {
	return listing.User{}, nil
}

func (m *Storage) GetUsersByPhoneNumbers(nums ...string) ([]listing.User, error) {
	return []listing.User{}, nil
}
