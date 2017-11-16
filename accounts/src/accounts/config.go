package main

import (
	"accounts/db"
	"accounts/server"
	"log"
	"strings"

	"github.com/go-redis/redis"
	"github.com/spf13/viper"
)

var (
	// DB provides database access for accounts
	DB db.AccountsDatabase

	accountsServer *server.AccountsServer
)

func init() {
	var err error

	viper.SetConfigName("config")
	viper.AddConfigPath(".")
	viper.AutomaticEnv()
	viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
	viper.SetEnvPrefix("ACCOUNTS")

	err = viper.ReadInConfig()
	if err != nil {
		log.Fatal(err)
	}

	redisAddr := viper.GetString("redis.host") + ":" + viper.GetString("redis.port")
	DB, err = db.NewRedisDB(&redis.Options{
		Addr:     redisAddr,
		Password: viper.GetString("redis.password"),
	})
	if err != nil {
		log.Fatal(err)
	}

	accountsServer = &server.AccountsServer{
		Host: viper.GetString("server.host"),
		Port: viper.GetInt("server.port"),
		DB:   DB,
	}
}
