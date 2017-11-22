package messageQueue

// Consumer consumes message from a queue.
type Consumer interface {
	Consume() error
	Close() error
}
