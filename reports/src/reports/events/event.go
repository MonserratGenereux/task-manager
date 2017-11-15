package events

import (
	"fmt"
)

// Map topic to event constructor for such topic.
var supportedEventHandlers = map[string]func(string, []byte) EventHandler{
	"tasks":  NewTaskEvent,
	"habits": NewHabitEvent,
}

// EventHandler knows how to handle an event
type EventHandler interface {
	Handle() error
}

// NewEventHandler creates a event handler for the topic.
func NewEventHandler(topic string, body []byte) (EventHandler, error) {
	if constructor, supported := supportedEventHandlers[topic]; supported {
		return constructor(topic, body), nil
	}

	return nil, fmt.Errorf("Event topic %s is not supported", topic)
}
