package server

import (
	"db"
	"fmt"
	"log"
	"net"

	pb "pb/account"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

// AccountsServer is used to implement Account service.
type AccountsServer struct {
	Host string
	Port int
	DB   db.AccountsDatabase
}

// GetAccountByUsername rRetrieves account by username.
func (s *AccountsServer) GetAccountByUsername(ctx context.Context, in *pb.AccountUsername) (*pb.GetAccountResponse, error) {
	log.Println("GetAccountByUsername", in)
	account, err := s.DB.GetByUsername(in.Username)
	if err != nil {
		return nil, err
	}

	return &pb.GetAccountResponse{
		Exists:  account != nil,
		Account: account,
	}, nil
}

// GetAccountByID checks if an account exists given the id
func (s *AccountsServer) GetAccountByID(ctx context.Context, in *pb.AccountID) (*pb.GetAccountResponse, error) {
	log.Println("GetAccountByID", in)
	account, err := s.DB.GetByID(in.Id)
	if err != nil {
		return nil, err
	}

	return &pb.GetAccountResponse{
		Exists:  account != nil,
		Account: account,
	}, nil
}

// CreateAccount creates new account. Id must be empty.
func (s *AccountsServer) CreateAccount(ctx context.Context, in *pb.Account) (*pb.StatusResponse, error) {
	log.Println("CreateAccount", in)
	id, err := s.DB.CreateAccount(in)

	errMessage := ""
	if err != nil {
		errMessage = err.Error()
	}

	return &pb.StatusResponse{
		Succeded:  err == nil,
		AccountId: id,
		Error:     errMessage,
	}, err
}

// UpdateAccount updates all fields in the given account. Id must be set.
func (s *AccountsServer) UpdateAccount(ctx context.Context, in *pb.Account) (*pb.StatusResponse, error) {
	log.Println("UpdateAccount", in)
	err := s.DB.UpdateAccount(in)

	errMessage := ""
	if err != nil {
		errMessage = err.Error()
	}

	return &pb.StatusResponse{
		Succeded:  err == nil,
		AccountId: in.Id,
		Error:     errMessage,
	}, err
}

// DeleteAccount deletes the accounts given its id.
func (s *AccountsServer) DeleteAccount(ctx context.Context, in *pb.AccountID) (*pb.StatusResponse, error) {
	log.Println("DeleteAccount", in)
	err := s.DB.DeleteAccount(in.Id)

	errMessage := ""
	if err != nil {
		errMessage = err.Error()
	}

	return &pb.StatusResponse{
		Succeded:  err == nil,
		AccountId: in.Id,
		Error:     errMessage,
	}, err
}

// Start initiliazes and start a server implementing Account service.
func (s *AccountsServer) Start() {
	address := fmt.Sprintf("%s:%d", s.Host, s.Port)
	log.Println("Account server listening in", address)
	lis, err := net.Listen("tcp", address)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpServer := grpc.NewServer()
	log.Println("Registering Account service...")
	pb.RegisterAccountServiceServer(grpServer, s)
	// Register reflection service on gRPC server.
	reflection.Register(grpServer)
	log.Println("Account server up and running")
	if err := grpServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
