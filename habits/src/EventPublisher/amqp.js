const amqp = require('amqplib');
const EventPublisher = require('./EventPublisher');

class AmqpPublisher extends EventPublisher {
  constructor({uri, bindKey, exchange, exchangeType, options}) {
    super();

    console.log(uri);
    this.uri = uri;
    this.bindKey = bindKey;
    this.exchange = exchange;
    this.exchangeType = exchangeType;
    this.options = options;
    this.isConnected = false;
  }

  connect() {
    const self = this;
    return amqp.connect(self.uri)
    .then(connection => {
      console.log(`Successfully connected to broker at ${self.uri}`);
      return connection.createChannel();
    })
    .then((channel) => {
      channel.assertExchange(self.exchange, self.exchangeType, self.options);
      self.channel = channel;
      self.isConnected = true;
      console.log(`Created channel sending to a '${self.exchangeType}' exchange: ${self.exchange}`);
    })
    .catch(err => {
      throw new Error(`Could not connect to broker at ${self.uri}: ${err}`);
    })
  }

  sendToQueue(message) {
    if (!this.channel) {
      console.log("Publisher not connected, wait until is ready to publish");
      return;
    }

    console.log(message);
    this.channel.publish(this.exchange, this.bindKey, message.buffer)
    console.log(`Published ${this.bindKey} event: ${message}`)
  }
}

module.exports = AmqpPublisher;
