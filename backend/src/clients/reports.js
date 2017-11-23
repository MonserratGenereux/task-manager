const reportsProto = require('../../proto/reports/reports_grpc_pb');

const config = require('config');
const grpc = require('grpc');
const promisify = require('grpc-promisify');

const Logger = require('../util/logger');
const logger = Logger(config.get('logger'));

const reportsConfig = config.get('services.reports');

const client = new reportsProto.ReportsServiceClient(
  reportsConfig.address,
  grpc.credentials.createInsecure());

const deadline = new Date();
const ttl = reportsConfig.connection_ttl_seconds;
deadline.setSeconds(deadline.getSeconds() + ttl);
client.waitForReady(deadline, (err) => {
  if (err)
    // throw new Error(`Reports grpc service at ${reportsConfig.address} is not available: ${err}`);
    console.log(`Reports grpc service at ${reportsConfig.address} is not available: ${err}`)
  logger.info(`Started Reports grpc client on server ${reportsConfig.address}`);
})

promisify(client);

module.exports = client;
