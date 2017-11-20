package postgresql

import (
	"fmt"
	"log"
	"pb/habits"
	"pb/tasks"
)

func manualTest() {

	DB, _ := NewReportsDatabase()

	DB.SaveHabit(&habits.Habit{
		XId:    "1",
		UserId: "1",
		Name:   "HabitA",
		Score:  12.3,
		Color:  "red",
	})

	DB.SaveHabit(&habits.Habit{
		XId:    "2",
		UserId: "1",
		Name:   "HabitB",
		Score:  20.3,
		Color:  "red",
	})

	DB.SaveHabit(&habits.Habit{
		XId:    "3",
		UserId: "1",
		Name:   "HabitC",
		Score:  0.3,
		Color:  "blue",
	})

	var err error

	now := int64(1511136250697)

	// Due today
	err = DB.SaveTask(&tasks.Task{
		Id:                 1,
		UserId:             1,
		Title:              "taskA",
		Description:        "sup",
		CreatedTimestamp:   now,
		DueTimestamp:       now + 10000,
		CompletedTimestamp: 0,
		IsCompleted:        false,
	})

	if err != nil {
		log.Fatal(err)
	}

	// Due later
	err = DB.SaveTask(&tasks.Task{
		Id:                 2,
		UserId:             1,
		Title:              "taskA",
		Description:        "sup",
		CreatedTimestamp:   now,
		DueTimestamp:       now + 1000000,
		CompletedTimestamp: 0,
		IsCompleted:        false,
	})

	if err != nil {
		log.Fatal(err)
	}

	// Late
	err = DB.SaveTask(&tasks.Task{
		Id:                 3,
		UserId:             1,
		Title:              "taskB",
		Description:        "sup",
		CreatedTimestamp:   now,
		DueTimestamp:       now - 10000,
		CompletedTimestamp: 0,
		IsCompleted:        false,
	})
	if err != nil {
		log.Fatal(err)
	}

	// Completed on time
	err = DB.SaveTask(&tasks.Task{
		Id:                 4,
		UserId:             1,
		Title:              "taskC",
		Description:        "sup",
		CreatedTimestamp:   now,
		DueTimestamp:       now + 10000,
		CompletedTimestamp: now,
		IsCompleted:        true,
	})
	if err != nil {
		log.Fatal(err)
	}

	// Competed before
	err = DB.SaveTask(&tasks.Task{
		Id:                 5,
		UserId:             1,
		Title:              "taskC",
		Description:        "sup",
		CreatedTimestamp:   now,
		DueTimestamp:       now,
		CompletedTimestamp: now - 100000,
		IsCompleted:        true,
	})
	if err != nil {
		log.Fatal(err)
	}

	// Competed late
	err = DB.SaveTask(&tasks.Task{
		Id:                 6,
		UserId:             1,
		Title:              "taskC",
		Description:        "sup",
		CreatedTimestamp:   now,
		DueTimestamp:       now,
		CompletedTimestamp: now + 10000,
		IsCompleted:        true,
	})
	if err != nil {
		log.Fatal(err)
	}

	reportT, err := DB.GetTasksReport()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Tasks", reportT)

	reportX, err := DB.GetTasksUserReport(1)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Tasks user", reportX)

	report, err := DB.GetHabitsReport()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Habit", report)

}
