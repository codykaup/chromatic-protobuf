package main

import (
	pb "chromatic-capture-proto/internal"
	"context"
	"log"
	"net"

	grpc "google.golang.org/grpc"
)

type chromaticCapture struct {
	pb.UnimplementedBuildServiceServer
}

func (c *chromaticCapture) CreateBuild(ctx context.Context, in *pb.BuildRequest) (*pb.BuildResponse, error) {
	return &pb.BuildResponse{
		Status: "TODO",
	}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":8080")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	buildServiceServer := &chromaticCapture{}
	pb.RegisterBuildServiceServer(s, buildServiceServer)

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
