#!/bin/bash

# Add project to GOPATH
if ! [[ $GOPATH == *$(pwd)* ]]; then
  export GOPATH=$GOPATH:$(pwd)
fi

./protobuf.sh

# Run
go run src/reports/*.go
