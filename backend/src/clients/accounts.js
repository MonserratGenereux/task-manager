// const PROTO_PATH = __dirname + '/../../../shared/proto/accounts/account.proto';

const config = require('config');
const grpc = require('grpc');
const promisify = require('grpc-promisify');
const path = require('path');
const fs = require('fs');

const Logger = require('../util/logger');
const logger = Logger(config.get('logger'));

const accountConfig = config.get('services.accounts');

const protoPath = config.get('proto_path');
const protoFile = path.isAbsolute(protoPath) ?
                path.join(protoPath, accountConfig.proto_file) : 
                path.join(__dirname, protoPath, accountConfig.proto_file);

if (!fs.statSync(protoFile).isFile()) {
  throw new Error(`Provided proto file ${protoFile} does not exist`);
}

const accountProto = grpc.load(protoFile).accounts;

const client = new accountProto.AccountService(
  accountConfig.address,
  grpc.credentials.createInsecure());

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err) => {
  if (err) 
    throw new Error(`Accounts grpc service at ${accountConfig.address} is not available: ${err}`);
  logger.info(`Started Accounts grpc client on server ${accountConfig.address}`);
})

promisify(client);

module.exports = client;
