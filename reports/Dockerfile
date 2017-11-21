# Start from a Debian image with the latest version of Go installed
# and a workspace (GOPATH) configured at /go.
FROM golang

WORKDIR /go/src/reports

# Copy the local package files to the container's workspace.
ADD src /go/src/
ADD config.json .

# Install all dependancies
RUN go get ./...
RUN go install

# Run the outyet command by default when the container starts.
ENTRYPOINT /go/bin/reports
