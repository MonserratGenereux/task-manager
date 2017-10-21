const PROTO_PATH = __dirname + '/../../../shared/proto/accounts/account.proto';

var grpc = require('grpc');
var accountProto = grpc.load(PROTO_PATH).account;

const client = new accountProto.AccountService(
  'localhost:50051',
  grpc.credentials.createInsecure());

module.exports = client;
