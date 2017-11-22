
grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:proto/ \
--grpc_out=proto \
--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
--proto_path=../shared/proto \
../shared/proto/accounts/accounts.proto \
../shared/proto/habits/habits.proto \
../shared/proto/reports/reports.proto \
../shared/proto/tasks/tasks.proto
