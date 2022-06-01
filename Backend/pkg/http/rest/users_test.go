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
		JSON(createUserBody).
		Expect(t).
		Status(http.StatusCreated).
		End()

	apitest.
		New("Bad Request").
		Handler(testRouter).
		Post("/users").
		JSON(`{"bad request: "bad request"}`).
		Expect(t).
		Status(http.StatusBadRequest).
		End()
}
