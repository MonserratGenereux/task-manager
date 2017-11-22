const config = require('config');
require('./EventPublisher').connect();
const server = require('./server');

server.start();
console.log("Started Habits server");

// const AmqpPublisher = require('./EventPublisher/amqp');

// const pub = new AmqpPublisher(config.get('events_publisher.amqp'));

// // 'amqp://guest:guest@localhost:5672/'
// const { Habit } = require('./proto/habits');
// pub.connect().then(() => {
//   pub.publish(new Habit({_id: 'monze', name: 'sup', description: 'whatup'}));
// })

