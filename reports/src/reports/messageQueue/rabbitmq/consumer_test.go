package rabbitmq

import (
	"pb/habits"
	"pb/tasks"
	"reflect"
	"reports/db"
	"reports/events"
	"testing"

	"github.com/golang/protobuf/proto"
	"github.com/streadway/amqp"
)

var (
	reportsDatabase *db.FakeReportsDatabase
)

func init() {
	reportsDatabase = db.NewFakeReportsDatabase()
	events.SetDatabase(reportsDatabase)
}

func TestHandleEvent(t *testing.T) {
	deliveries := make(chan amqp.Delivery)
	done := make(chan error)

	go handle(deliveries, done)

	habit1 := &habits.Habit{
		XId:    "1",
		UserId: "1",
	}

	habit2 := &habits.Habit{
		XId:    "1",
		UserId: "1",
	}

	task1 := &tasks.Task{
		Id:     1,
		UserId: 1,
	}

	task2 := &tasks.Task{
		Id:     2,
		UserId: 2,
	}

	sendHabitOverChannel(deliveries, habit1)
	sendHabitOverChannel(deliveries, habit2)
	sendTaskOverChannel(deliveries, task1)
	sendTaskOverChannel(deliveries, task2)

	close(deliveries)
	<-done

	expectedHabits := []*habits.Habit{habit1, habit2}
	if !reflect.DeepEqual(expectedHabits, reportsDatabase.Habits) {
		t.Error("Events did not save habits correctly")
	}

	expectedTasks := []*tasks.Task{task1, task2}
	if !reflect.DeepEqual(expectedTasks, reportsDatabase.Tasks) {
		t.Error("Events did not save tasks correctly")
	}
}

func sendHabitOverChannel(channel chan amqp.Delivery, habit *habits.Habit) {
	body, _ := proto.Marshal(habit)
	channel <- amqp.Delivery{
		Body:       body,
		RoutingKey: "habits",
	}
}

func sendTaskOverChannel(channel chan amqp.Delivery, task *tasks.Task) {
	body, _ := proto.Marshal(task)
	channel <- amqp.Delivery{
		Body:       body,
		RoutingKey: "tasks",
	}
}
