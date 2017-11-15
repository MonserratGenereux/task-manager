const express = require('express');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');
var client = require('./../../clients/habit.js');


const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @swagger
 * /habits:
 *   get:
 *     tags:
 *       - "habits"
 *     summary: Fetch habits
 *     description: Returns all habits available for the user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: Users Id
 *         in: header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/GetHabitsResponse"
 *       400:
 *         description: Invalid Request
 *
 */
router.get('/', (req, res) => {
  if(req.get('userId')){
    var userId = req.get('userId');
    client.getHabits({userId: userId}, function(err, HabitsResponse) {
      if(err){
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
      }else{
        res.status(HttpStatus.OK).send(HabitsResponse);
      }
    });
  }else{
    res.status(HttpStatus.BAD_REQUEST).send('Invalid Request');
  }

});

/**
 * @swagger
 * /habits/{habitId}:
 *   get:
 *     tags:
 *       - "habits"
 *     summary: Fetch habit
 *     description: Returns specified habit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user Id
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: habitId
 *         description: id of the habit
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/habits"
 *       400:
 *         description: Invalid Request
 */
router.get('/:habitId', (req, res) => {
  if(req.get('userId') && req.params.habitId){
    var userId = req.get('userId');
    var _id = req.params.habitId;
    client.getHabitById({_id: _id, userId: userId}, function(err, GetHabitResponse) {
      if(err){
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
      }else{
        res.status(HttpStatus.OK).send(GetHabitResponse);
      }
    });
  }else{
    res.status(HttpStatus.BAD_REQUEST).send('Invalid Request');
  }
});

/**
 * @swagger
 * /habits:
 *   post:
 *     tags:
 *       - "habits"
 *     summary: Create new habit
 *     description: Create new habit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: habit
 *         description: Information to create a new Habit
 *         in: body
 *         required: true
 *         schema:
 *           $ref: "#/definitions/HabitCreate"
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/StatusResponse"
 *       400:
 *         description: server error
 */
router.post('/', (req, res) => {
  if(req.get('userId') && req.query){
    req.query.userId = req.get('userId');
    req.query.good = (req.query.good === 'true');
    req.query.bad = (req.query.good === 'true');
    client.createHabit(req.query, function(err, StatusResponse) {
      if(err){
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
      }else{
        res.status(HttpStatus.OK).send(StatusResponse);
      }
    });
  }else{
    res.status(HttpStatus.BAD_REQUEST).send('Invalid Request');
  }
});

/**
 * @swagger
 * /habits:
 *   patch:
 *     tags:
 *       - "habits"
 *     summary: Update existing habit
 *     description: Update existing habit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: habit
 *         description: info of the habit to modify
 *         in: body
 *         required: true
 *         schema:
 *           $ref: "#/definitions/habits"
 *     responses:
 *       200:
 *         description: habit created
 *       400:
 *         description: server error
 */
router.patch('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /habits:
 *   delete:
 *     tags:
 *       - "habits"
 *     summary: Delete habit
 *     description: Delete habit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: habitId
 *         description: id of the habit to delete
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: habit deleted
 *       400:
 *         description: server error
 */
router.delete('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /habits/good/{habitId}:
 *   post:
 *     tags:
 *       - "habits"
 *     summary: Add points to good habit
 *     description: Add points to good habit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: habitId
 *         description: id of the habit to add points
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: server error
 */
router.post('/good/:habitId', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});
/**
 * @swagger
 * /habits/bad/{habitId}:
 *   post:
 *     tags:
 *       - "habits"
 *     summary: Subtract points to bad habit
 *     description: Subtract points to bad habit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: habitId
 *         description: id of the habit to subtract points
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: server error
 */
router.post('/bad/:habitId', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

module.exports = router;
