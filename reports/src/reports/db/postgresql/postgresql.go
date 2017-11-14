package postgresql

import (
	"pb/habits"
	"pb/reports"
	"pb/tasks"
	"reports/db"
)

// ReportsDatabase implements ReportsDatabase in PostgreSQL.
type ReportsDatabase struct {
	client interface{}
}

// Ensure datastoreDB conforms to the BookDatabase interface.
var _ db.ReportsDatabase = &ReportsDatabase{}

// NewReportsDatabase creates and implementation ReportsDatabase in PostgreSQL.
func NewReportsDatabase() (db.ReportsDatabase, error) {
	return &ReportsDatabase{}, nil
}

// GetHabitsReport generates a general habits report using PostgresSQL
func (db *ReportsDatabase) GetHabitsReport() (*reports.HabitsReport, error) {
	return &reports.HabitsReport{}, nil
}

// GetHabitsUserReport generates a user specific habits report using PostgresSQL
func (db *ReportsDatabase) GetHabitsUserReport(userID int64) (*reports.HabitsUserReport, error) {
	return &reports.HabitsUserReport{}, nil
}

// SaveHabit stores a habit object in PostgresSQL
func (db *ReportsDatabase) SaveHabit(*habits.Habit) error {
	return nil
}

// GetTasksReport generates a general tasks report using PostgresSQL
func (db *ReportsDatabase) GetTasksReport() (*reports.TasksReport, error) {
	return &reports.TasksReport{}, nil
}

// GetTasksUserReport generates a user specific tasks report using PostgresSQL
func (db *ReportsDatabase) GetTasksUserReport(userID int64) (*reports.TasksUserReport, error) {
	return &reports.TasksUserReport{}, nil
}

// SaveTask stores a task object in PostgresSQL
func (db *ReportsDatabase) SaveTask(*tasks.Task) error {
	return nil
}

// Close closes the connection to PostgresSQL
func (db *ReportsDatabase) Close() error {
	return nil
}
