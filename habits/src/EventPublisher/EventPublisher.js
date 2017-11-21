const { Habit } = require('../proto/habits');

class EventPublisher {

  connect() {
    return Promise.reject(new Error('Not implemented'));
  }

  publish(event) {
    const message = Habit.encode(event);
    return this.sendToQueue(message);
  }

  sendToQueue(message) {
    throw new Error("Not implemented");
  }
}

module.exports = EventPublisher;
