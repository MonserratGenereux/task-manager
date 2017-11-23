package db

import (
	"pb/habits"
	"pb/reports"
	"pb/tasks"
)

// FakeReportsDatabase mocks a Reports Database
type FakeReportsDatabase struct {
	Habits []*habits.Habit
	Tasks  []*tasks.Task
}

// NewFakeReportsDatabase is a dummy implementation of ReportsDatabase
func NewFakeReportsDatabase() *FakeReportsDatabase {
	return &FakeReportsDatabase{
		Habits: make([]*habits.Habit, 0),
		Tasks:  make([]*tasks.Task, 0),
	}
}

// GetHabitsReport retrieves general habits report
func (fake *FakeReportsDatabase) GetHabitsReport() (*reports.HabitsReport, error) {
	return nil, nil
}

// GetHabitsUserReport retrieves a user specific habits report.
func (fake *FakeReportsDatabase) GetHabitsUserReport(userID int64) (*reports.HabitsUserReport, error) {
	return nil, nil
}

// SaveHabit saves a habit.
func (fake *FakeReportsDatabase) SaveHabit(habit *habits.Habit) error {
	fake.Habits = append(fake.Habits, habit)
	return nil
}

// GetTasksReport retrieves a general tasks report.
func (fake *FakeReportsDatabase) GetTasksReport() (*reports.TasksReport, error) {
	return nil, nil
}

// GetTasksUserReport retrieves a user specific tasks report.
func (fake *FakeReportsDatabase) GetTasksUserReport(userID int64) (*reports.TasksUserReport, error) {
	return nil, nil
}

// SaveTask saves a task.
func (fake *FakeReportsDatabase) SaveTask(task *tasks.Task) error {
	fake.Tasks = append(fake.Tasks, task)
	return nil
}

// Close closes the connection
func (fake *FakeReportsDatabase) Close() error {
	return nil
}
