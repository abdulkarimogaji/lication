package mongo

import (
	"testing"

	"github.com/lication/pkg/listing"
	"github.com/stretchr/testify/require"
)

func TestCreateUser(t *testing.T) {
	user := &listing.User{
		DisplayName: "Random Name",
		Email:       "random@email.com",
		Phone:       "+2348166629550",
		Password:    "random password",
	}
	result, err := testStorage.CreateUser(user)
	require.NoError(t, err)
	require.Equal(t, user.DisplayName, result.DisplayName)
	require.Equal(t, user.Email, result.Email)
	require.Equal(t, user.Phone, result.Phone)
	require.Equal(t, user.Password, result.Password)
}
