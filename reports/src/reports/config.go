package main

import (
	"log"
	"reports/db"
	"reports/db/postgresql"
	"reports/messageQueue"
	"reports/messageQueue/rabbitmq"
)

var (
	// DB provides database access for reports
	DB db.ReportsDatabase

	taskEventsConsumer   messageQueue.Consumer
	habitsEventsConsumer messageQueue.Consumer
)

func init() {
	var err error

	DB, err = postgresql.NewReportsDatabase()
	if err != nil {
		log.Fatal(err)
	}

	taskEventsConsumer, err = rabbitmq.NewConsumer("amqp://guest:guest@localhost:5672/", "tasks")
	if err != nil {
		log.Fatal(err)
	}

	habitsEventsConsumer, err = rabbitmq.NewConsumer("amqp://guest:guest@localhost:5672/", "habits")
	if err != nil {
		log.Fatal(err)
	}
}
