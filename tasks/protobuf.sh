#!/bin/bash

# Generate grpc service
protoc \
  -I ../shared/proto \
  --plugin=protoc-gen-grpc-java=/usr/local/bin/protoc-gen-grpc-java \
  --grpc-java_out=src/main/java \
  ../shared/proto/tasks/tasks.proto

# Generate grpc objects
protoc \
    -I ../shared/proto \
    --java_out=src/main/java \
    ../shared/proto/tasks/tasks.proto