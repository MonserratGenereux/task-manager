package db

import (
	"errors"
	"fmt"
	"log"
	pb "pb/account"
	"strconv"

	"github.com/go-redis/redis"
)

// RedisDB implements AccountsDatabase in Redis.
type RedisDB struct {
	client *redis.Client
}

const (
	idKey             = "next-id"
	userIDKeyPrefix   = "user-id-"
	usernameKeyPrefix = "username-"
	firstID           = 0
	defaultExpiration = 0
)

// Ensure datastoreDB conforms to the BookDatabase interface.
var _ AccountsDatabase = &RedisDB{}

// NewRedisDB creates and implementation AccountsDatabase in Redis.
func NewRedisDB(options *redis.Options) (AccountsDatabase, error) {
	newClient := redis.NewClient(options)
	_, err := newClient.Ping().Result()

	if err != nil {
		log.Println("Could not connect to redis: ", err)
		return nil, err
	}

	// Create id key if does not exits.
	err = newClient.SetNX(idKey, firstID, 0).Err()
	if err != nil {
		return nil, err
	}

	log.Println("Successfully connected to Redis at:", options.Addr)
	return &RedisDB{
		client: newClient,
	}, nil

}

// GetByUsername retrieves an account by its username.
func (db *RedisDB) GetByUsername(username string) (*pb.Account, error) {
	accountID, err := db.client.Get(buildUsernameKey(username)).Result()
	if err != nil {
		return nil, err
	}

	id, err := strconv.ParseInt(accountID, 10, 64)
	if err != nil {
		return nil, err
	}

	return db.GetByID(id)
}

// GetByID retrieves an account by its ID.
func (db *RedisDB) GetByID(id int64) (*pb.Account, error) {
	serializedString, err := db.client.Get(buildUserIDKey(id)).Result()
	if err == redis.Nil {
		log.Printf("Account with id %d does not exists", id)
		return nil, nil
	} else if err != nil {
		return nil, err
	}

	account, err := UnmarshalStringToAccount(serializedString)
	if err != nil {
		return nil, err
	}

	return account, nil
}

// CreateAccount creates a new account.
func (db *RedisDB) CreateAccount(account *pb.Account) (id int64, err error) {

	if account.Username == "" {
		err = errors.New("Username is required to create a new account")
		return
	}

	_, err = db.client.Get(buildUsernameKey(account.Username)).Result()
	if err != redis.Nil {
		err = fmt.Errorf("Account with username %s does already exist", account.Username)
		return
	}

	// Get new Id to assign to new account
	id, err = db.client.Incr(idKey).Result()
	if err != nil {
		return
	}

	// Save account with new id
	account.Id = id

	err = db.bindUsernameToID(account.Username, id)
	if err != nil {
		return
	}

	err = db.saveAccount(account)
	if err != nil {
		return
	}

	return
}

// DeleteAccount deletes an existing account by its ID.
func (db *RedisDB) DeleteAccount(id int64) error {
	// TODO(dtoledo23): Trigger data deletion of habits and tesks.
	account, err := db.GetByID(id)
	if err != nil {
		return err
	}
	if account == nil {
		return fmt.Errorf("Account with id %d does not exist", id)
	}

	_, err = db.client.Del(buildUserIDKey(id), buildUsernameKey(account.Username)).Result()
	return err
}

// UpdateAccount updates an existing account.
func (db *RedisDB) UpdateAccount(account *pb.Account) (err error) {
	err = db.DeleteAccount(account.Id)
	if err != nil {
		return
	}

	err = db.bindUsernameToID(account.Username, account.Id)
	if err != nil {
		return
	}

	err = db.saveAccount(account)
	if err != nil {
		return
	}

	return
}

// Close closes the database connection.
func (db *RedisDB) Close() error {
	return db.client.Close()
}

func (db *RedisDB) bindUsernameToID(username string, id int64) error {
	usernameKey := buildUsernameKey(username)
	idContent := strconv.FormatInt(id, 10)

	// Associate username key with account id
	return db.client.Set(usernameKey, idContent, defaultExpiration).Err()
}

func (db *RedisDB) saveAccount(account *pb.Account) (err error) {
	idKey := buildUserIDKey(account.Id)
	accountContent, err := MarshalAccount(account)
	if err != nil {
		return
	}

	return db.client.Set(idKey, accountContent, defaultExpiration).Err()
}

func buildUserIDKey(id int64) string {
	return userIDKeyPrefix + strconv.FormatInt(id, 10)
}

func buildUsernameKey(username string) string {
	return usernameKeyPrefix + username
}
