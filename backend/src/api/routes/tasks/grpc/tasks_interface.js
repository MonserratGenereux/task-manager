const path = require('path');
const GRPC_PORT = '0.0.0.0:50051';

var PROTO_PATH = path.join(__dirname, '/../../shared/proto/tasks/task.proto');
var grpc = require('grpc');
var taksks_proto = grpc.load(PROTO_PATH).tasks;

var getTaskHandler = require('./../src/get-tasks.js');
var createTaskHandler = require('./../src/create-tasks.js');
var deleteTaskHandler = require('./../src/delete-tasks.js');
var getTaskByIdHandler = require('./../src/get-by-id-tasks.js');
var updateTaskHandler = require('./../src/update-tasks.js');

//rpc Gettasks (emptyInput) returns (tasksResponse)
function getTasks(call, callback) {
    callback(null, getTasksHandler(call.request));
}
//rpc Createtask (Inputtasks) returns (Outputtasks) {}
function createTask(call, callback) {
    callback(null, createTaskHandler(call.request));
}
//rpc DeleteTask (taskId) returns (response) {}
function deleteTask(call, callback) {
    callback(null, deleteTaskHandler(call.request));
}
// rpc GettaskById (taskId) returns (Outputtasks) {}
function getTaskById(call, callback) {
    callback(null, getTaskByIdHandler(call.request));
}
// rpc Updatetask (taskId) returns (Outputtasks) {}
function updateTask(call, callback) {
    callback(null, updateTaskHandler(call.request));
}

function main() {
    var server = new grpc.Server();
    server.addProtoService(tasks_proto.tasks.service, {
        getTasks: getTasks,
        createtask: createTask,
        deleteTask: deleteTask,
        getTaskById: getTaskById,
        updateTask: updateTask
    });
    server.bind(GRPC_PORT, grpc.ServerCredentials.createInsecure());
    server.start();
}

main();