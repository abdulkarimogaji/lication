package rest

import (
	"errors"
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

func getValidatorErrorMsg(fe validator.FieldError, fieldName string) string {
	switch fe.Tag() {
	case "required":
		return "This field is required"
	case "e164":
		return "Must be a valid Phone number e.g +2348166629550"
	case "email":
		return "Must be a valid email"
	case "min":
		return "Must be at least 6 characters' long"
	}
	return "Unknown error"
}

func badRequestResponse(c *gin.Context, err error) {

	if err == io.EOF {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "request body cannot be empty",
			"data":  nil,
		})
		return
	}

	var ve validator.ValidationErrors
	if errors.As(err, &ve) {
		out := make([]ValidatorErrorMsg, len(ve))
		for i, fe := range ve {
			out[i] = ValidatorErrorMsg{fe.Field(), getValidatorErrorMsg(fe, fe.Field())}
		}
		c.JSON(http.StatusBadRequest, gin.H{
			"error": out,
			"data":  nil,
		})
		return
	}
	c.JSON(http.StatusBadRequest, gin.H{
		"error": err.Error(),
		"data":  nil,
	})
}

func errorResponse(c *gin.Context, err error) {
	c.JSON(http.StatusInternalServerError, gin.H{
		"data":  nil,
		"error": err,
	})
}

type ValidatorErrorMsg struct {
	Field   string `json:"field"`
	Message string `json:"message"`
}
