package server

import (
	"fmt"
	"log"
	"net"

	pb "pb/account"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

// AccountServer is used to implement Account service.
type server struct{}

// GetAccountByUsername rRetrieves account by username.
func (s *server) GetAccountByUsername(ctx context.Context, in *pb.GetAccountByUsernameRequest) (*pb.Account, error) {
	return &pb.Account{}, nil
}

// Checks if an account exists given the id
func (s *server) AccountExists(ctx context.Context, in *pb.AccountExistsRequest) (*pb.AccountExistsResponse, error) {
	return &pb.AccountExistsResponse{}, nil
}

// Creates new account. Id must be empty.
func (s *server) CreateAccount(ctx context.Context, in *pb.Account) (*pb.StatusResponse, error) {
	return &pb.StatusResponse{}, nil
}

// Updates all fields in the given account. Id must be set.
func (s *server) UpdateAccount(ctx context.Context, in *pb.Account) (*pb.StatusResponse, error) {
	return &pb.StatusResponse{}, nil
}

// Deletes the accounts given its id.
func (s *server) DeleteAccount(ctx context.Context, in *pb.DeleteAccountRequest) (*pb.StatusResponse, error) {
	return &pb.StatusResponse{}, nil
}

// Start initiliazes and start a server implementing Account service.
func Start(host string, port int) {
	address := fmt.Sprintf("%s:%d", host, port)
	log.Println("Account server listening in", address)
	lis, err := net.Listen("tcp", address)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	log.Println("Registering Account service...")
	pb.RegisterAccountServiceServer(s, &server{})
	// Register reflection service on gRPC server.
	reflection.Register(s)
	log.Println("Account server up and running")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
