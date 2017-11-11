var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const constants = require("./../constants");
mongoose.connect("mongodb://localhost/habits");

var HabitSchema = new Schema({
    name:{
      type: String,
      required: true
    },
    description:{
      type: String,
      default: null
    },
    type: {
      type: String,
      required: true,
      enum: constants.TYPE
    },
    difficulty: {
      type: String,
      required: true,
      enum: constants.DIFFICULTY
    },
    score: {
      type: Number,
      default: 0
    },
    color: String
});

module.exports = mongoose.model('habit', HabitSchema);
