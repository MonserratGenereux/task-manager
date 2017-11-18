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
    throw new Error(`Habits grpc service at ${habitConfig.address} is not available: ${err}`);
  logger.info(`Started habits grpc client on server ${habitConfig.address}`);
})

promisify(client);

module.exports = client;

function main() {
  var client = new habitProto.HabitsService('localhost:50051',
                                       grpc.credentials.createInsecure());

  // client.getHabits({userId:'2'}, function(err, response) {
  //   console.log('getHabit:', response, err);
  // });

  // client.createHabit({userId: '1', name: 'Juan', description: 'Soy una descripcion', good: true, bad: false, difficulty: "1"}, function(err, response) {
  //   console.log("createHabit: ", response, err);
  // });
  //
  // client.createHabit({userId: '1', name: 'Paco', good: false, bad: true, difficulty: "2"}, function(err, response) {
  //   console.log("createHabit: ", response, err);
  // });
  //
  // client.createHabit({userId: '2', name: 'Pedro', good: true, bad: true, difficulty: "2"}, function(err, response) {
  //   console.log("createHabit: ", response, err);
  // });
  //
  // client.createHabit({userId: '2', name: 'Toa', good: false, bad: false, difficulty: "2"}, function(err, response) {
  //   console.log("createHabit: ", response, err);
  // });

  // client.deleteHabit({_id: '5a0b3769f50f1d2e60fb555a',}, function(err, response) {
  //   console.log('deleteHabit:', response, err);
  // });

  // client.getHabitById({_id: '5a0b3769f50f1d2e60fb555a',userId: "1"}, function(err, response) {
  //   console.log('getHabitById:', response, err);
  // });

  // client.updateHabit({_id: '5a0b3769f50f1d2e60fb5558',
  //                   userId: '2',
  //                   name: 'Paco_Update',
  //                   description: 'Soy una descripcion',
  //                   good: true,
  //                   bad: true,
  //                   difficulty: "0"}, function(err, response) {
  //   console.log('updateHabit:', response, err);
  // });

  // client.markHabit({_id: '5a0b3769f50f1d2e60fb5558', good: false, bad: true}, function(err, response) {
  //   console.log('updateHabit:', response, err);
  // });

}

main();
