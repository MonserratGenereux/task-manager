# task-manager-accounts
Accounts microservice of Task Manager System

## How to run with Docker
Comming soon.

## Run locally

- `./run.sh`

## Requirements

- [Go 1.9.1](https://golang.org/dl/)
- [protoc 3](https://github.com/google/protobuf/releases)

## Install (Mac only)

- `brew install go`
- `brew install protobuf`

## Protocol buffers

If you make changes to the protocol buffer accounts file. Make sure to update the code by running:

```bash
mkdir -p src/pb/account

protoc \
  -I ../shared/proto/accounts \
  --go_out=plugins=grpc:./src/pb/account \
  ../shared/proto/accounts/account.proto
```