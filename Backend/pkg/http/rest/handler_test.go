package rest

import (
	"net/http"
	"testing"

	"github.com/steinfletcher/apitest"
)

func TestHealthCheck(t *testing.T) {
	apitest.New().
		Handler(testRouter).
		Get("/health").
		Expect(t).
		Status(http.StatusOK).
		End()
}
