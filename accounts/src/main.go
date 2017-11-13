package main

import (
	"server"
)

func main() {
	accountsServer := &server.AccountsServer{
		Host: "0.0.0.0",
		Port: 50051,
		DB:   DB,
	}

	accountsServer.Start()
}
