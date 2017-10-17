const app = require('./api/app');
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log('Task Manager backend server listening on port: ' + port);
});
