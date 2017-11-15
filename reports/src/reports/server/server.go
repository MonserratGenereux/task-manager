package server

import (
	"fmt"
	"log"
	"net"
	"pb/reports"
	"reports/db"

	"golang.org/x/net/context"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

// ReportsServer is used to implement Account service.
type ReportsServer struct {
	Host string
	Port int
	DB   db.ReportsDatabase
}

// GetHabitsReport retrieves a general habits report.
func (s *ReportsServer) GetHabitsReport(ctx context.Context, in *reports.Empty) (*reports.HabitsReport, error) {
	return &reports.HabitsReport{}, nil
}

// GetHabitsUserReport retrieves a user specific habits report.
func (s *ReportsServer) GetHabitsUserReport(ctx context.Context, in *reports.AccountID) (*reports.HabitsUserReport, error) {
	return &reports.HabitsUserReport{}, nil
}

// GetTasksReport retrieves a general tasks report.
func (s *ReportsServer) GetTasksReport(ctx context.Context, in *reports.Empty) (*reports.TasksReport, error) {
	return &reports.TasksReport{}, nil
}

// GetTasksUserReport retrieves a user specific tasks report.
func (s *ReportsServer) GetTasksUserReport(ctx context.Context, in *reports.AccountID) (*reports.TasksUserReport, error) {
	return &reports.TasksUserReport{}, nil
}

// Start initiliazes and start a server implementing Account service.
func (s *ReportsServer) Start() {
	address := fmt.Sprintf("%s:%d", s.Host, s.Port)
	log.Println("Reports server listening in", address)
	lis, err := net.Listen("tcp", address)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpServer := grpc.NewServer()
	log.Println("Registering Reports service...")
	reports.RegisterReportsServiceServer(grpServer, s)
	// Register reflection service on gRPC server.
	reflection.Register(grpServer)
	log.Println("Reports server up and running")
	if err := grpServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
