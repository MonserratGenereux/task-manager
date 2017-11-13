package db

import (
	"log"
	"strconv"
	"testing"

	pb "pb/account"

	"github.com/alicebob/miniredis"
	"github.com/go-redis/redis"
)

var (
	redisServer *miniredis.Miniredis
	redisDB     AccountsDatabase
)

func init() {
	var err error

	redisServer, err = miniredis.Run()
	if err != nil {
		log.Fatal(err)
	}

	redisDB, err = NewRedisDB(&redis.Options{
		Addr: redisServer.Addr(),
	})

	if err != nil {
		log.Fatal(err)
	}
}

func TestCreateAccount(t *testing.T) {
	account := pb.Account{
		Username: "username1",
		Email:    "email1",
	}

	id, err := redisDB.CreateAccount(&account)
	if err != nil {
		t.Error(err)
	}

	account.Id = id

	usernameKey := buildUsernameKey(account.Username)
	expectedID := strconv.FormatInt(id, 10)
	redisServer.CheckGet(t, usernameKey, expectedID)

	userIDKey := buildUserIDKey(id)
	expectedAccountContent, _ := MarshalAccount(&account)
	redisServer.CheckGet(t, userIDKey, expectedAccountContent)
}

func TestCreateAccountWithExistingUsername(t *testing.T) {
	account := pb.Account{
		Username: "username11",
		Email:    "email11",
	}

	_, err := redisDB.CreateAccount(&account)
	if err != nil {
		t.Error(err)
	}

	_, err = redisDB.CreateAccount(&account)
	if err == nil {
		t.Fatal("It should have thrown an error if username already exists")
	}
}

func TestGetById(t *testing.T) {
	account := pb.Account{
		Username: "username2",
		Email:    "email2",
	}

	id, err := redisDB.CreateAccount(&account)
	if err != nil {
		t.Error(err)
	}

	account.Id = id
	acc, err := redisDB.GetByID(id)

	if acc.String() != account.String() {
		t.Errorf("GetByID did not return expected account")
	}
}

func TestGetByUsername(t *testing.T) {
	username := "username3"

	account := pb.Account{
		Username: username,
		Email:    "email3",
	}

	id, err := redisDB.CreateAccount(&account)
	if err != nil {
		t.Error(err)
	}

	account.Id = id
	acc, err := redisDB.GetByUsername(username)
	if err != nil {
		t.Error(err)
	}

	if acc.String() != account.String() {
		t.Errorf("GetByUsername did not return expected account")
	}
}

func TestDeleteAccount(t *testing.T) {
	account := pb.Account{
		Username: "username4",
		Email:    "email4",
	}

	id, err := redisDB.CreateAccount(&account)
	if err != nil {
		t.Error(err)
	}

	account.Id = id

	// Check if account exists
	serializedString, _ := MarshalAccount(&account)
	redisServer.CheckGet(t, buildUserIDKey(id), serializedString)

	err = redisDB.DeleteAccount(id)
	if err != nil {
		t.Error(err)
	}

	if redisServer.Exists(buildUsernameKey(account.Username)) {
		t.Fatalf("Username '%s' should not have existed anymore", account.Username)
	}

	if redisServer.Exists(buildUserIDKey(id)) {
		t.Fatalf("ID '%d' should not have existed anymore", id)
	}
}

func TestDeleteNonExistingAccountThrowsError(t *testing.T) {
	nonExistantID := int64(12345)
	err := redisDB.DeleteAccount(nonExistantID)
	if err == nil {
		t.Fatal("It should have thrown an error")
	}
}

func TestUpdateAccount(t *testing.T) {
	oldUsername := "username6"
	oldEmail := "email6"

	account := pb.Account{
		Username: oldUsername,
		Email:    oldEmail,
	}

	id, err := redisDB.CreateAccount(&account)
	if err != nil {
		t.Error(err)
	}
	account.Id = id

	updatedUsername := "updated-username"
	updatedEmail := "updated-email"

	account.Username = updatedUsername
	account.Email = updatedEmail

	err = redisDB.UpdateAccount(&account)
	if err != nil {
		t.Error(err)
	}

	// Check if account was updated
	actualAccountByID, _ := redisDB.GetByID(id)
	if actualAccountByID.String() != account.String() {
		t.Errorf("Expected account '%s', got '%s'", account.String(), actualAccountByID.String())
	}

	// Check username change
	if redisServer.Exists(buildUsernameKey(oldUsername)) {
		t.Fatalf("Username '%s' should not have existed anymore", oldUsername)
	}

	redisServer.CheckGet(t, buildUsernameKey(updatedUsername), strconv.FormatInt(id, 10))
}

func TestUpdateNonExistingAccountThrowsError(t *testing.T) {
	account := pb.Account{
		Username: "username5",
		Email:    "email5",
	}

	err := redisDB.UpdateAccount(&account)
	if err == nil {
		t.Fatal("It should have thrown an error")
	}
}
