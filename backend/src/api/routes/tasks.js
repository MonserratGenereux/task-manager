const express = require('express');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');
var client = require('./../../clients/tasks.js');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @swagger
 * /tasks:
 *   get:
 *     tags:
 *       - "tasks"
 *     summary: Fetch tasks
 *     description: Returns all tasks available for the user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user-id
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/GetTasksResponse"
 *       400:
 *         description: invalid request
 *         schema:
 *           $ref: "#/definitions/GetTasksResponse"
 */
router.get('/', (req, res) => {
  if (!req.get('user-id')) {
    res.status(HttpStatus.BAD_REQUEST).send('user-id header is required');
    return;
  }
  client.getTasks({id: req.get('user-id')})
  .then(tasks => {
    res.status(HttpStatus.OK).send(tasks);
  })
  .catch( err => {
    console.error(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  });
});

/**
 * @swagger
 * /tasks/{taskId}:
 *   get:
 *     tags:
 *       - "tasks"
 *     summary: Fetch task
 *     description: Returns specified task
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user-id
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/tasks"
 *       400:
 *         description: invalid request
 */
router.get('/:taskId', (req, res) => {
  client.getTaskById({id: req.params.taskId})
  .then(task => {
    res.status(HttpStatus.OK).send(task);
  })
  .catch( err => {
    console.error(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  });
});

/**
 * @swagger
 * /tasks:
 *   post:
 *     tags:
 *       - "tasks"
 *     summary: Create new task
 *     description: Create new task
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user-id
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: task
 *         description: info of the newly create task
 *         in: body
 *         required: true
 *         schema:
 *           $ref: "#/definitions/TaskCreate"
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/StatusResponse"
 *       400:
 *         description: Invalid Request
 *         schema:
 *           $ref: "#/definitions/StatusResponse"
 */
router.post('/', (req, res) => {
  if (!req.body.task) {
    res.status(HttpStatus.BAD_REQUEST).send('task is required in the body');
    return;
  }
  client.createTask(req.body.task)
  .then(statusResponse => {
    res.status(HttpStatus.OK).send(statusResponse);
  })
  .catch( err => {
    console.error(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  });
});

/**
 * @swagger
 * /tasks:
 *   patch:
 *     tags:
 *       - "tasks"
 *     summary: Update existing task
 *     description: Update existing task
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user-id
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: task
 *         description: info of the task to be modified
 *         in: body
 *         required: true
 *         schema:
 *           $ref: "#/definitions/TaskUpdate"
 *     responses:
 *       200:
 *         description: task created
 *         schema:
 *           $ref: "#/definitions/StatusResponse"
 *       400:
 *         description: Invalid Request
 *         schema:
 *           $ref: "#/definitions/StatusResponse"
 */
router.patch('/', (req, res) => {
  if (!req.body.task) {
    res.status(HttpStatus.BAD_REQUEST).send('task is required in the body');
    return;
  }
  client.updateTask(req.body.task)
  .then(statusResponse => {
    res.status(HttpStatus.OK).send(statusResponse);
  })
  .catch( err => {
    console.error(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  });
});

/**
 * @swagger
 * /tasks:
 *   delete:
 *     tags:
 *       - "tasks"
 *     summary: Delete task
 *     description: Delete task
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user-id
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: taskId
 *         description: id of the task to delete
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/StatusResponse"
 *       400:
 *         description: Invalid Request
 *         schema:
 *           $ref: "#/definitions/StatusResponse"
 */
router.delete('/:taskId', (req, res) => {
  client.deleteTask({id: req.params.taskId})
  .then(statusResponse => {
    res.status(HttpStatus.OK).send(statusResponse);
  })
  .catch( err => {
    console.error(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  });
});

/**
 * @swagger
 * /tasks/complete/{taskId}:
 *   post:
 *     tags:
 *       - "tasks"
 *     summary: Mark task as complete
 *     description: Mark task as complete
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user-id
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: taskId
 *         description: id of the task to mark as complete
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/tasks"
 *       400:
 *         description: server error
 *         schema:
 *           $ref: "#/definitions/StatusResponse"
 *          
 *       
 */
router.post('/complete/:taskId', (req, res) => {
  client.deleteTask({id: req.params.taskId})
  .then(task => {
    res.status(HttpStatus.OK).send(task);
  })
  .catch( err => {
    console.error(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  });
});

module.exports = router;