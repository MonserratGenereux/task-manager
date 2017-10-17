const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'Task Manager',
    version: '0.0.1',
    description: 'Backend API for Task Manager app.\n',
  },
  servers: [
    { url: 'http://localhost:3000', description: 'development' },
  ],
  host: 'localhost:3000',
  basePath: '/',
  tags: [
    { name: 'account', description: 'Operations about your User accounts' },
    { name: 'habit', description: 'Everything about habits' },
    { name: 'task', description: 'Everything about tasks' },
    { name: 'report', description: 'Acess to user and admin reports' },
    { name: 'status', description: '' },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/api/routes/*.js'],
};

module.exports = swaggerJSDoc(options);
