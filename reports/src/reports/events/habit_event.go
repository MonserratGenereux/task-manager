package events

import (
	"log"
	"pb/habits"

	"github.com/golang/protobuf/proto"
)

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
	habit := &habits.Habit{}
	err := proto.Unmarshal(e.body, habit)
	if err != nil {
		log.Println("unmarshaling error: ", err)
		// log.Fatal("unmarshaling error: ", err)
	}

	log.Printf(
		"Got habit %dB delivery: %s",
		len(e.body),
		habit,
	)

	return reportsDB.SaveHabit(habit)
}
