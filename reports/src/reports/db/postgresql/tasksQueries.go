package postgresql

import (
	"database/sql"
	"fmt"
	"pb/reports"
	"pb/tasks"
)

const (
	completedOnTimeQuery = `
		SELECT COUNT(*)
		FROM   tasks
		WHERE  is_completed
		AND    completed <= due
		AND    completed::date = due::date;
	`

	completedBeforeTimeQuery = `
		SELECT COUNT(*)
		FROM   tasks
		WHERE  is_completed
		AND    completed <= due
		AND    completed::date != due::date;
	`
	completedDelayedQuery = `
		SELECT COUNT(*)
		FROM   tasks
		WHERE  is_completed
		AND    completed > due;
	`

	pendingLateQuery = `
		SELECT COUNT(*)
		FROM   tasks
		WHERE  is_completed = false
		AND    CURRENT_TIMESTAMP > due;
	`

	pendingForTodayQuery = `
		SELECT COUNT(*)
		FROM   tasks
		WHERE  is_completed = false
		AND    CURRENT_TIMESTAMP < due
		AND    CURRENT_DATE = due::date;
	`

	pendingNotTodayQuery = `
		SELECT COUNT(*)
		FROM   tasks
		WHERE  is_completed = false
		AND    CURRENT_DATE < due::date;
	`

	delayedUserTasksQuery = `
		SELECT *
		FROM   tasks
		WHERE  user_id = $1
		AND    CURRENT_TIMESTAMP > due;
	`

	userTasksForTodayQuery = `
		SELECT *
		FROM   tasks
		WHERE  user_id = $1
		AND    is_completed = false
		AND    CURRENT_TIMESTAMP <= due
		AND    CURRENT_DATE = due::date;
	`
)

func getAllCompletedTasks(transaction *sql.Tx) (*reports.TasksReport_CompletedTasks, error) {
	var row *sql.Row
	var err error

	var onTime int64
	var beforeTime int64
	var delayed int64

	row = transaction.QueryRow(completedOnTimeQuery)
	err = row.Scan(&onTime)
	if err != nil {
		return nil, err
	}

	row = transaction.QueryRow(completedBeforeTimeQuery)
	err = row.Scan(&beforeTime)
	if err != nil {
		return nil, err
	}

	row = transaction.QueryRow(completedDelayedQuery)
	err = row.Scan(&delayed)
	if err != nil {
		return nil, err
	}

	return &reports.TasksReport_CompletedTasks{
			OnTime:     onTime,
			BeforeTime: beforeTime,
			Delayed:    delayed,
		},
		nil
}

func getAllAvailableTasks(transaction *sql.Tx) (*reports.TasksReport_AvailableTasks, error) {
	var row *sql.Row
	var err error

	var remaining int64
	var forToday int64
	var delayed int64

	row = transaction.QueryRow(pendingLateQuery)
	err = row.Scan(&delayed)
	if err != nil {
		return nil, err
	}

	row = transaction.QueryRow(pendingForTodayQuery)
	err = row.Scan(&forToday)
	if err != nil {
		return nil, err
	}

	row = transaction.QueryRow(pendingNotTodayQuery)
	err = row.Scan(&remaining)
	if err != nil {
		return nil, err
	}

	return &reports.TasksReport_AvailableTasks{
			Remaining: remaining,
			ForToday:  forToday,
			Delayed:   delayed,
		},
		nil
}

func getUserDelayedTasks(transaction *sql.Tx, userID string) ([]*tasks.Task, error) {
	statement, err := transaction.Prepare(delayedUserTasksQuery)
	if err != nil {
		return nil,
			fmt.Errorf("Could not prepare delayed user tasks query: %s", err)
	}

	return queryUserTasks(statement, userID)
}

func getUserDueTodayTasks(transaction *sql.Tx, userID string) ([]*tasks.Task, error) {
	statement, err := transaction.Prepare(userTasksForTodayQuery)
	if err != nil {
		return nil,
			fmt.Errorf("Could not prepare user tasks for today query: %s", err)
	}

	return queryUserTasks(statement, userID)
}

func queryUserTasks(statement *sql.Stmt, userID string) ([]*tasks.Task, error) {
	rows, err := statement.Query(userID)
	if err != nil {
		return nil,
			fmt.Errorf("Could not fetch tasks: %s", err)
	}

	defer rows.Close()

	tasks := make([]*tasks.Task, 0)
	for rows.Next() {
		task, _ := scanTask(rows)
		tasks = append(tasks, task)
	}

	err = rows.Err()
	if err != nil {
		return nil,
			fmt.Errorf("Could not iterate over tasks: %s", err)
	}

	return tasks, nil
}

func scanTask(row scannable) (*tasks.Task, error) {
	var id int64
	var userID int64
	var title string
	var description string
	var created int64
	var due int64
	var completed int64
	var isCompleted bool

	err := row.Scan(
		&id,
		&userID,
		&title,
		&description,
		&created,
		&due,
		&completed,
		&isCompleted,
	)

	if err != nil {
		return nil, fmt.Errorf("Could not read habit from row: %s", err)
	}

	return &tasks.Task{
			Id:                 id,
			UserId:             userID,
			Title:              title,
			Description:        description,
			CreatedTimestamp:   created,
			DueTimestamp:       due,
			CompletedTimestamp: completed,
		},
		nil
}
