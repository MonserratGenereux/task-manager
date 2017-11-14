#!/bin/bash

# Generate Protocol Buffers code
mkdir -p src/pb

protoc \
  -I ../shared/proto \
  --go_out=plugins=grpc:./src \
  ../shared/proto/accounts/accounts.proto
