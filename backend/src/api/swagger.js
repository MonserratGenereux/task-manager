const swaggerJSDoc = require('swagger-jsdoc');

const schemaDefinitions = require('../schemas');

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
  definitions: schemaDefinitions,
  tags: [
    { name: 'accounts', description: 'Operations about your User accounts' },
    { name: 'habits', description: 'Everything about habits' },
    { name: 'tasks', description: 'Everything about tasks' },
    { name: 'reports', description: 'Access to user and admin reports' },
    { name: 'status', description: '' },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/api/routes/*.js'],
};

module.exports = swaggerJSDoc(options);
