package rabbitmq

import (
	"fmt"
	"log"
	"reports/events"
	"reports/messageQueue"

	"github.com/streadway/amqp"
)

const (
	exchange     = "task-manager-exchange"
	exchangeType = "direct"
	queueName    = "task-manager-queue"
)

// Consumer consumes from a RabbitMQ queue.
type Consumer struct {
	conn    *amqp.Connection
	channel *amqp.Channel
	tag     string
	done    chan error
}

var _ messageQueue.Consumer = &Consumer{}

// Consume makes the RabbitMQ consumer start consumming.
func (c *Consumer) Consume() error {
	return nil
}

// Close closes the connection with RabbitMQ.
func (c *Consumer) Close() error {
	// will close() the deliveries channel
	if err := c.channel.Cancel(c.tag, true); err != nil {
		return fmt.Errorf("Consumer cancel failed: %s", err)
	}

	if err := c.conn.Close(); err != nil {
		return fmt.Errorf("AMQP connection close error: %s", err)
	}

	defer log.Printf("AMQP shutdown OK")

	// wait for handle() to exit
	return <-c.done
}

// NewConsumer creates a new RabitMQ consumer.
func NewConsumer(amqpURI, topic string) (*Consumer, error) {
	c := &Consumer{
		conn:    nil,
		channel: nil,
		tag:     topic + "-consumer",
		done:    make(chan error),
	}

	var err error

	log.Printf("Initializing amqp consumer on topic %s", topic)
	c.conn, err = amqp.Dial(amqpURI)
	if err != nil {
		return nil, fmt.Errorf("Connection to Rabitmq refused: %s", err)
	}

	go func() {
		log.Printf("Closing amp consumer: %s", <-c.conn.NotifyClose(make(chan *amqp.Error)))
	}()

	log.Printf("Successfully connected %s consumer to %q", topic, amqpURI)
	c.channel, err = c.conn.Channel()
	if err != nil {
		return nil, fmt.Errorf("Channel: %s", err)
	}

	log.Printf("Created Channel, declaring Exchange (%q)", exchange)
	if err = c.channel.ExchangeDeclare(
		exchange,     // name of the exchange
		exchangeType, // type
		true,         // durable
		false,        // delete when complete
		false,        // internal
		false,        // noWait
		nil,          // arguments
	); err != nil {
		return nil, fmt.Errorf("Exchange Declare: %s", err)
	}

	log.Printf("Created Exchange, declaring Queue %q", queueName)
	queue, err := c.channel.QueueDeclare(
		queueName, // name of the queue
		true,      // durable
		false,     // delete when unused
		false,     // exclusive
		false,     // noWait
		nil,       // arguments
	)
	if err != nil {
		return nil, fmt.Errorf("Queue Declare: %s", err)
	}

	log.Printf("Declared Queue (%q %d messages, %d consumers), binding to Exchange (key %q)",
		queue.Name, queue.Messages, queue.Consumers, topic)

	if err = c.channel.QueueBind(
		queue.Name, // name of the queue
		topic,      // bindingKey
		exchange,   // sourceExchange
		false,      // noWait
		nil,        // arguments
	); err != nil {
		return nil, fmt.Errorf("Queue Bind: %s", err)
	}

	log.Printf("Queue bound to Exchange, starting Consume (consumer tag %q)", c.tag)
	deliveries, err := c.channel.Consume(
		queue.Name, // name
		c.tag,      // consumerTag,
		false,      // noAck
		false,      // exclusive
		false,      // noLocal
		false,      // noWait
		nil,        // arguments
	)
	if err != nil {
		return nil, fmt.Errorf("Queue Consume: %s", err)
	}

	go handle(deliveries, c.done)

	return c, nil
}

func handle(deliveries <-chan amqp.Delivery, done chan error) {
	for d := range deliveries {
		eventHandler, err := events.NewEventHandler(d.RoutingKey, d.Body)
		if err != nil {
			log.Println(err)
		}
		err = eventHandler.Handle()
		if err != nil {
			log.Println(err)
		}
		d.Ack(false)
	}
	log.Printf("handle: deliveries channel closed")
	done <- nil
}
