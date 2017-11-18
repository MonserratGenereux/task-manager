package postgresql

import (
	"database/sql"
	"fmt"
	"log"
	"pb/habits"
	"pb/reports"
	"pb/tasks"
	"reports/db"
	// _ "github.com/lib/pq"
)

// ReportsDatabase implements ReportsDatabase in PostgreSQL.
type ReportsDatabase struct {
	db          *sql.DB
	upsertTask  *sql.Stmt
	upsertHabit *sql.Stmt
}

// Ensure datastoreDB conforms to the BookDatabase interface.
var _ db.ReportsDatabase = &ReportsDatabase{}

// NewReportsDatabase creates and implementation ReportsDatabase in PostgreSQL.
func NewReportsDatabase() (db.ReportsDatabase, error) {
	db := getConnection()
	err := db.Ping()
	if err != nil {
		return nil,
			fmt.Errorf("Could ping PostgreSQL instance is alive at %s: %s", postgresURL, err.Error())
	}

	upserTask, err := DB.Prepare(`
		INSERT INTO tasks 
		(id, user_id, title, description, created, due, completed) 
		VALUES ($1, $2, $3, $4, to_timestamp($5), to_timestamp($6), to_timestamp($7)) 
		ON CONFLICT (id) DO UPDATE 
			SET id=excluded.id,
					user_id=excluded.user_id,
					title=excluded.title,
					description=excluded.description,
					created=excluded.created,
					due=excluded.due,
					completed=excluded.completed;
	`)
	if err != nil {
		return nil,
			fmt.Errorf("Could not prepare upsert task statement: %s", err.Error())
	}

	upsertHabit, err := DB.Prepare(`
		INSERT INTO habits 
		(id, user_id, name, description, good, bad, difficulty, score, color) 
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
		ON CONFLICT (id) DO UPDATE 
			SET id=excluded.id,
					user_id=excluded.user_id,
					name=excluded.name,
					description=excluded.description,
					good=excluded.good,
					bad=excluded.bad,
					difficulty=excluded.difficulty,
					score=excluded.score,
					color=excluded.color;
	`)
	if err != nil {
		return nil,
			fmt.Errorf("Could not prepare upsert habit statement: %s", err.Error())
	}

	return &ReportsDatabase{db, upserTask, upsertHabit}, nil
}

// GetHabitsReport generates a general habits report using PostgresSQL
func (rd *ReportsDatabase) GetHabitsReport() (*reports.HabitsReport, error) {
	return &reports.HabitsReport{}, nil
}

// GetHabitsUserReport generates a user specific habits report using PostgresSQL
func (rd *ReportsDatabase) GetHabitsUserReport(userID int64) (*reports.HabitsUserReport, error) {
	return &reports.HabitsUserReport{}, nil
}

// SaveHabit stores a habit object in PostgresSQL
func (rd *ReportsDatabase) SaveHabit(h *habits.Habit) error {
	result, err := rd.upsertHabit.Exec(
		h.GetXId(),
		h.GetUserId(),
		h.GetName(),
		h.GetDescription(),
		h.GetGood(),
		h.GetBad(),
		h.GetDifficulty(),
		h.GetScore(),
		h.GetColor(),
	)
	if err != nil {
		return fmt.Errorf("Could not upsert habit %s: %s", h, err.Error())
	}

	log.Println(result)

	return nil
}

// GetTasksReport generates a general tasks report using PostgresSQL
func (rd *ReportsDatabase) GetTasksReport() (*reports.TasksReport, error) {
	return &reports.TasksReport{}, nil
}

// GetTasksUserReport generates a user specific tasks report using PostgresSQL
func (rd *ReportsDatabase) GetTasksUserReport(userID int64) (*reports.TasksUserReport, error) {
	return &reports.TasksUserReport{}, nil
}

// SaveTask stores a task object in PostgresSQL
func (rd *ReportsDatabase) SaveTask(t *tasks.Task) error {
	log.Printf("Inserting %s", t)
	result, err := rd.upsertTask.Exec(
		t.GetId(),
		t.GetUserId(),
		t.GetTitle(),
		t.GetDescription(),
		t.GetCreatedTimestamp(),
		t.GetDueTimestamp(),
		t.GetCompletedTimestamp(),
	)
	if err != nil {
		return fmt.Errorf("Could not upsert task %s: %s", t, err.Error())
	}

	log.Println(result, result == nil)

	return nil
}

// Close closes the connection to PostgresSQL
func (rd *ReportsDatabase) Close() error {
	return nil
}
