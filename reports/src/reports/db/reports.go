package db

import (
	"pb/habits"
	"pb/reports"
	"pb/tasks"
)

// ReportsDatabase provides thread-safe access to a database of reports
type ReportsDatabase interface {
	// GetHabitsReport retrieves a general habits report.
	GetHabitsReport() (*reports.HabitsReport, error)

	// GetHabitsUserReport retrieves a user specific habits report.
	GetHabitsUserReport(userID int64) (*reports.HabitsUserReport, error)

	// SaveHabit saves a habit.
	SaveHabit(*habits.Habit) error

	// GetTasksReport retrieves a general tasks report.
	GetTasksReport() (*reports.TasksReport, error)

	// GetTasksUserReport retrieves a user specific tasks report.
	GetTasksUserReport(userID int64) (*reports.TasksUserReport, error)

	// SaveTask saves a task.
	SaveTask(*tasks.Task) error

	Close() error
}
