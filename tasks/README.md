# task-manager-tasks
Tasks microservices of Task Manager System

## Compile Protocol buffers

Compile service:

'''bash 
protoc \
  -I ../shared/proto/tasks \
  --plugin=protoc-gen-grpc-java=/usr/local/bin/protoc-gen-grpc-java \
  --grpc-java_out=src/main/java \
  ../shared/proto/tasks/task.proto
'''

Compile objects:
'''bash
protoc \
    -I ../shared/proto/tasks \
    --java_out=src/main/java \
    ../shared/proto/tasks/task.proto
'''