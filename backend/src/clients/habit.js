const config = require('config');
const grpc = require('grpc');
const promisify = require('grpc-promisify');
const path = require('path');
const fs = require('fs');

const Logger = require('../util/logger');
const logger = Logger(config.get('logger'));

const habitConfig = config.get('services.habits');

const protoPath = config.get('proto_path');
const protoFile = path.isAbsolute(protoPath) ?
                path.join(protoPath, habitConfig.proto_file) :
                path.join(__dirname, protoPath, habitConfig.proto_file);

if (!fs.statSync(protoFile).isFile()) {
  throw new Error(`Provided proto file ${protoFile} does not exist`);
}

const habitProto = grpc.load(protoFile).habits;

const client = new habitProto.HabitsService(
  habitConfig.address,
  grpc.credentials.createInsecure());

const deadline = new Date();
const ttl = habitConfig.connection_ttl_seconds;
deadline.setSeconds(deadline.getSeconds() + ttl);
client.waitForReady(deadline, (err) => {
  if (err)
    // throw new Error(`Habits grpc service at ${habitConfig.address} is not available: ${err}`);
    console.log(`Habits grpc service at ${habitConfig.address} is not available: ${err}`)
  logger.info(`Started habits grpc client on server ${habitConfig.address}`);
})

promisify(client);

module.exports = client;
