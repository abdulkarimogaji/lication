package rest

import (
	"net/http"
	"testing"

	"github.com/steinfletcher/apitest"
)

var createUserBody = `{
	"name": "Abdulkarim",
	"email": "some@email.com",
	"phone": "+2348036281855",
	"password": "some password",
	"username": "Karimoh"
}`

func TestCreateUser(t *testing.T) {
	apitest.
		New("Success").
		Handler(testRouter).
		Post("/users").
		Body(createUserBody).
		Expect(t).
		Status(http.StatusCreated).
		End()
}
