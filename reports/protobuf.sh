#!/bin/bash

# Generate Protocol Buffers code
mkdir -p src/pb

protoc \
  -I ../shared/proto \
  --go_out=plugins=grpc:./src \
  ../shared/proto/reports/reports.proto

protoc \
  -I ../shared/proto \
  --go_out=plugins=grpc:./src \
  ../shared/proto/habits/habits.proto

protoc \
  -I ../shared/proto \
  --go_out=plugins=grpc:./src \
  ../shared/proto/tasks/tasks.proto
