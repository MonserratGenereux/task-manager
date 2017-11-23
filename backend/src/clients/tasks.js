const config = require('config');
const grpc = require('grpc');
const promisify = require('grpc-promisify');
const path = require('path');
const fs = require('fs');

const Logger = require('../util/logger');
const logger = Logger(config.get('logger'));

const taskConfig = config.get('services.tasks');

const protoPath = config.get('proto_path');
const protoFile = path.isAbsolute(protoPath) ?
                path.join(protoPath, taskConfig.proto_file) :
                path.join(__dirname, protoPath, taskConfig.proto_file);

if (!fs.statSync(protoFile).isFile()) {
  throw new Error(`Provided proto file ${protoFile} does not exist`);
}

const taskProto = grpc.load(protoFile).tasks;

const client = new taskProto.TasksService(
  taskConfig.address,
  grpc.credentials.createInsecure());

const deadline = new Date();
const ttl = taskConfig.connection_ttl_seconds;
deadline.setSeconds(deadline.getSeconds() + ttl);
client.waitForReady(deadline, (err) => {
  if (err)
    // throw new Error(`Tasks grpc service at ${taskConfig.address} is not available: ${err}`);
    console.log(`Tasks grpc service at ${taskConfig.address} is not available: ${err}`)
  logger.info(`Started tasks grpc client on server ${taskConfig.address}`);
})

promisify(client);

module.exports = client;
