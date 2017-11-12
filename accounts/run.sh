
# Add project to GOPATH
if ! [[ $GOPATH == *$(pwd)* ]]; then
  export GOPATH=$GOPATH:$(pwd)
fi

# Generate Protocol Buffers code
mkdir -p src/pb/account

protoc \
  -I ../shared/proto/accounts \
  --go_out=plugins=grpc:./src/pb/account \
  ../shared/proto/accounts/account.proto

# Run
go run src/main.go src/config.go
