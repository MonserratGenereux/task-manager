package events

import (
	"log"
	"pb/tasks"

	"github.com/golang/protobuf/proto"
)

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
	task := &tasks.Task{}
	err := proto.Unmarshal(eh.body, task)
	if err != nil {
		log.Fatal("unmarshaling error: ", err)
	}

	log.Printf(
		"Got task %dB delivery: %q",
		len(eh.body),
		eh.body,
	)

	log.Println(task)
	return nil
}
