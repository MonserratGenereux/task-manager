package postgresql

import (
	"database/sql"
	"log"

	// Required import for dynamic driver creation
	_ "github.com/lib/pq"
)

const (
	postgresURL = "postgres://qjpkoyywrlpjum:87c093e2aedc98ab716410d7dc460168a943381c5200bd34d3906c49f86babd8@ec2-54-163-236-33.compute-1.amazonaws.com:5432/d76gm40btv2p96"

	createTasksTable = `
	CREATE TABLE IF NOT EXISTS tasks (
	 id INT PRIMARY KEY,
	 user_id INT NOT NULL,
	 title TEXT NOT NULL,
	 description TEXT NOT NULL,
	 created TIMESTAMP NOT NULL,
	 due TIMESTAMP NOT NULL,
	 completed TIMESTAMP,
	 is_completed BOOL NOT NULL
	);
	`

	createHabitsTable = `
	CREATE TABLE IF NOT EXISTS habits (
	 id TEXT PRIMARY KEY UNIQUE,
	 user_id TEXT NOT NULL,
	 name TEXT NOT NULL,
	 description TEXT NOT NULL,
	 good BOOLEAN NOT NULL,
	 bad BOOLEAN NOT NULL,
	 difficulty TEXT NOT NULL,
	 score FLOAT NOT NULL,
	 color TEXT NOT NULL
	);
	`
)

var (
	// DB provides thread safe connections to PostgreSQL
	DB *sql.DB
)

func getConnection() *sql.DB {
	if DB == nil {
		var err error
		DB, err = sql.Open("postgres", postgresURL)
		if err != nil {
			log.Fatalf("Could not connect to PostgreSQL at %s: %s", postgresURL, err.Error())
		}
		log.Printf("Succesfully created connection pool to PostgreSQL at %s", postgresURL)

		createTables()
		log.Printf("Succesfully created tasks and habit tables")
	}

	return DB
}

func createTables() {
	var err error

	_, err = DB.Exec(createTasksTable)
	if err != nil {
		log.Fatalf("Could not create tasks table")
	}

	_, err = DB.Exec(createHabitsTable)
	if err != nil {
		log.Fatalf("Could not create habits table")
	}
}
