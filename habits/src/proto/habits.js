const config = require('config');
const path = require('path');
const fs = require('fs');
const grpc = require('grpc');

// Load proto file.
const protoPath = config.get('proto_path');
const protoFile = config.get('proto_file');
const protoFilepath = path.isAbsolute(protoPath) ?
                path.join(protoPath, protoFile) : 
                path.join(__dirname, protoPath, protoFile);

if (!fs.statSync(protoFilepath).isFile()) {
  throw new Error(`Provided proto file ${protoFile} does not exist`);
}

module.exports = grpc.load(protoFilepath).habits;
