package events

import "log"

// HabitEvent represents an event of Habits
type HabitEvent struct {
	topic string
	body  []byte
}

// Ensure it implements EventHandler interface.
var _ EventHandler = &HabitEvent{}

// NewHabitEvent creates a new Habit event.
func NewHabitEvent(topic string, body []byte) EventHandler {
	return &HabitEvent{topic, body}
}

// Handle handles a Habit event
func (e *HabitEvent) Handle() error {
	log.Printf(
		"got %dB delivery: %q",
		len(e.body),
		e.body,
	)
	return nil
}
