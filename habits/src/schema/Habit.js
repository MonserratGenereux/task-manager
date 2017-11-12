var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const constants = require("./../constants");
mongoose.connect("mongodb://localhost/habits");

var HabitSchema = new Schema({
    userId: {
      type: String,
      required: true
    },
    name:{
      type: String,
      required: true
    },
    description:{
      type: String,
      default: ""
    },
    type: {
      type: String,
      required: true,
      enum: Object.keys(constants.TYPE_NAME)
    },
    difficulty: {
      type: String,
      required: true,
      enum: Object.keys(constants.DIFFICULTY)
    },
    score: {
      type: Number,
      default: 0.0
    },
    color: String
},
{ versionKey: false });

module.exports = mongoose.model('habit', HabitSchema);
