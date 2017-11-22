const mongoose = require('mongoose');
const constants = require("./../constants");
const config = require('config');
const Schema = mongoose.Schema;
mongoose.connect(config.get("mongo_path"),  { useMongoClient: true });

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
    good: {
      type: Boolean,
      required: true
    },
    bad: {
      type: Boolean,
      required: true
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
