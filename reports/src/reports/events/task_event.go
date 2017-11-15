package events

import "log"

// TaskEvent represents an event of Tasks
type TaskEvent struct {
	topic string
	body  []byte
}

// Ensure it implements EventHandler interface.
var _ EventHandler = &TaskEvent{}

// NewTaskEvent creates a new Task event.
func NewTaskEvent(topic string, body []byte) EventHandler {
	return &TaskEvent{topic, body}
}

// Handle handles a task event
func (eh *TaskEvent) Handle() error {
	log.Printf(
		"got %dB delivery: %q",
		len(eh.body),
		eh.body,
	)
	return nil
}
