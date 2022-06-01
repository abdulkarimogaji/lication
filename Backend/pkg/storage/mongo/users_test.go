package mongo

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/whatslication/pkg/listing"
)

func TestCreateUser(t *testing.T) {
	user := &listing.User{
		Name:     "Random Name",
		Email:    "random@email.com",
		Phone:    "+2348166629550",
		Username: "Randomer",
		Password: "random password",
	}
	result, err := testStorage.CreateUser(user)
	require.NoError(t, err)
	require.Equal(t, user.Name, result.Name)
	require.Equal(t, user.Email, result.Email)
	require.Equal(t, user.Phone, result.Phone)
	require.Equal(t, user.Username, result.Username)
	require.Equal(t, user.Password, result.Password)
}
