const config = require("config");

const protocol = config.get("events_publisher.protocol");

let EventsPublisher;
let publisherConfig;

try {
  EventsPublisher = require(`./${protocol}`);
  publisherConfig = config.get(`events_publisher.${protocol}`);
} catch (err) {
  console.error(err);
  throw new Error(` protocol ${protocol} is not supported`);
}



module.exports = new EventsPublisher(publisherConfig);
