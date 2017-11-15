package main

import (
	"reports/server"
)

func main() {
	reportsServer := &server.ReportsServer{
		Host: "0.0.0.0",
		Port: 50051,
		DB:   DB,
	}

	reportsServer.Start()

	go taskEventsConsumer.Consume()
	go habitsEventsConsumer.Consume()

	forever := make(chan bool)
	<-forever
}
