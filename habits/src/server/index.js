const config = require("config");

const protocol = config.get("server.protocol");

let server;

try {
  server = require(`./${protocol}`);
} catch (err) {
  console.error(err);
  throw new Error(`Server protocol ${protocol} is not supported`);
}

module.exports = server;
