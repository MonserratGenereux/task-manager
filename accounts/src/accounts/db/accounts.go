package db

import (
	"encoding/json"
	"fmt"
	pb "pb/accounts"
)

// AccountsDatabase provides thread-safe access to a database of accounts
type AccountsDatabase interface {

	// GetByUsername retrieves an account by its username.
	GetByUsername(username string) (*pb.Account, error)

	// GetByID retrieves an account by its ID.
	GetByID(id int64) (*pb.Account, error)

	// CreateAccount creates a new account.
	CreateAccount(account *pb.Account) (id int64, err error)

	// DeleteAccount deletes an existing account by its ID.
	DeleteAccount(id int64) error

	// UpdateAccount updates an existing account.
	UpdateAccount(account *pb.Account) error

	// Close closes the database connection.
	Close() error
}

// MarshalAccount provides internal standard way of serializing to JSON account objects.
func MarshalAccount(account *pb.Account) (string, error) {
	data, err := json.Marshal(account)
	if err != nil {
		return "", fmt.Errorf("Could not marshal account: %s", err)
	}
	return string(data[:]), nil
}

// UnmarshalStringToAccount provides internal standard way of deserializing from JSON string account objects.
func UnmarshalStringToAccount(data string) (*pb.Account, error) {
	return UnmarshalBytesToAccount([]byte(data))
}

// UnmarshalBytesToAccount provides internal standard way of deserializing from JSON bytes account objects.
func UnmarshalBytesToAccount(data []byte) (*pb.Account, error) {
	account := &pb.Account{}
	err := json.Unmarshal(data, account)
	if err != nil {
		return nil, fmt.Errorf("Could not unmarshal account: %s", err)
	}
	return account, nil
}
