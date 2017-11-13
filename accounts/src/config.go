package main

import (
	"db"
	"log"

	"github.com/go-redis/redis"
)

var (
	// DB provides database access for accounts
	DB db.AccountsDatabase
)

func init() {
	var err error

	DB, err = db.NewRedisDB(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password set
		DB:       0,  // use default DB
	})

	if err != nil {
		log.Fatal(err)
	}
}
