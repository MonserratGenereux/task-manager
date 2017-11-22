package postgresql

import (
	"database/sql"
	"fmt"
	"pb/habits"
	"pb/reports"
	"strings"
)

const (
	bestHabitQuery = `
		SELECT * 
		FROM habits 
		ORDER BY score DESC 
		LIMIT 1;
	`

	worstHabitQuery = `
		SELECT * 
		FROM habits 
		ORDER BY score ASC 
		LIMIT 1;
	`

	countByRangeQuery = `
		SELECT color, count(*) 
		FROM habits 
		GROUP BY color;
	`

	userHabitTypeQuery = `
		SELECT *
		FROM habits 
		WHERE user_id = $1 AND $habitType = true;
	`
)

func getBestHabit(transaction *sql.Tx) (*habits.Habit, error) {
	row := transaction.QueryRow(bestHabitQuery)
	return scanHabit(row)
}

func getWorstHabit(transaction *sql.Tx) (*habits.Habit, error) {
	row := transaction.QueryRow(worstHabitQuery)
	return scanHabit(row)
}

func getCountByRange(transaction *sql.Tx) ([]*reports.HabitsReport_RangeCount, error) {
	// Get color count
	rows, err := transaction.Query(countByRangeQuery)
	if err != nil {
		return nil,
			fmt.Errorf("Could not execute query %s: %s", countByRangeQuery, err)
	}

	defer rows.Close()

	rangeCounts := make([]*reports.HabitsReport_RangeCount, 0)
	for rows.Next() {
		var color string
		var count int64
		err = rows.Scan(&color, &count)
		rangeCounts = append(rangeCounts, &reports.HabitsReport_RangeCount{Color: color, Count: count})
	}

	err = rows.Err()
	if err != nil {
		return nil,
			fmt.Errorf("Could not iterate range count results: %s", err)
	}

	return rangeCounts, nil
}

func getUserBadHabits(transaction *sql.Tx, userID string) ([]*habits.Habit, error) {
	return getUserHabitsByType(transaction, userID, "bad")
}

func getUserGoodHabits(transaction *sql.Tx, userID string) ([]*habits.Habit, error) {
	return getUserHabitsByType(transaction, userID, "good")
}

func getUserHabitsByType(transaction *sql.Tx, userID, habitType string) ([]*habits.Habit, error) {
	query := strings.Replace(userHabitTypeQuery, "$habitType", habitType, -1)
	rows, err := transaction.Query(query, userID)
	if err != nil {
		return nil,
			fmt.Errorf("Could not execute query %s: %s", userHabitTypeQuery, err)
	}

	defer rows.Close()

	habits := make([]*habits.Habit, 0)
	for rows.Next() {
		habit, _ := scanHabit(rows)
		habits = append(habits, habit)
	}

	err = rows.Err()
	if err != nil {
		return nil,
			fmt.Errorf("Could not iterate range count results: %s", err)
	}

	return habits, nil
}

type scannable interface {
	Scan(dest ...interface{}) error
}

func scanHabit(row scannable) (*habits.Habit, error) {
	var id string
	var userID string
	var name string
	var description string
	var good bool
	var bad bool
	var difficulty string
	var score float32
	var color string

	err := row.Scan(
		&id,
		&userID,
		&name,
		&description,
		&good,
		&bad,
		&difficulty,
		&score,
		&color,
	)

	if err != nil {
		return nil, fmt.Errorf("Could not read habit from row: %s", err)
	}

	return &habits.Habit{
		XId:         id,
		UserId:      userID,
		Name:        name,
		Description: description,
		Good:        good,
		Bad:         bad,
		Difficulty:  difficulty,
		Score:       score,
		Color:       color,
	}, nil
}
