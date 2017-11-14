package main

import (
	"log"
	"reports/db"
	"reports/db/postgresql"
)

var (
	// DB provides database access for reports
	DB db.ReportsDatabase
)

func init() {
	var err error

	DB, err = postgresql.NewReportsDatabase()

	if err != nil {
		log.Fatal(err)
	}
}
