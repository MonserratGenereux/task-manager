package main

func main() {
	reportsServer.Start()

	go taskEventsConsumer.Consume()
	go habitsEventsConsumer.Consume()

	forever := make(chan bool)
	<-forever
}
