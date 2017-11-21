package main

import (
	"log"
	"reports/db"
	"reports/db/postgresql"
	"reports/events"
	"reports/messageQueue"
	"reports/messageQueue/rabbitmq"
	"reports/server"
	"strings"

	"github.com/spf13/viper"
)

var (
	// DB provides database access for reports
	DB            db.ReportsDatabase
	reportsServer *server.ReportsServer

	taskEventsConsumer   messageQueue.Consumer
	habitsEventsConsumer messageQueue.Consumer
)

func init() {
	var err error

	viper.SetConfigName("config")
	viper.AddConfigPath(".")
	viper.AutomaticEnv()
	viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
	viper.SetEnvPrefix("REPORTS")

	err = viper.ReadInConfig()
	if err != nil {
		log.Fatal(err)
	}

	uri := viper.GetString("database.uri")
	DB, err = postgresql.NewReportsDatabase(uri)
	if err != nil {
		log.Fatal(err)
	}

	uri = viper.GetString("events.amqp.uri")
	exchange := viper.GetString("events.amqp.exchange")
	exchangeType := viper.GetString("events.amqp.exchangeType")
	queueName := viper.GetString("events.amqp.queue")

	events.SetDatabase(DB)

	taskEventsConsumer, err = rabbitmq.NewConsumer(uri, "tasks", queueName, exchange, exchangeType)
	if err != nil {
		log.Fatal(err)
	}

	habitsEventsConsumer, err = rabbitmq.NewConsumer(uri, "habist", queueName, exchange, exchangeType)
	if err != nil {
		log.Fatal(err)
	}

	reportsServer = &server.ReportsServer{
		Host: viper.GetString("server.host"),
		Port: viper.GetInt("server.port"),
		DB:   DB,
	}
}
