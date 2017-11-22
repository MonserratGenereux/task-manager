var c = require('./../constants.js')

function copyObject(obj) {
    var newObj = {};
    for (var key in obj) {
        newObj[key] = obj[key];
    }

    return newObj;
}

function getScore(color){
  switch (color) {
    case c.COLORS.RED:
      return c.COLOR_RANGES.RED_UPPER_LIM -10;
      break;
    case c.COLORS.ORANGE:
      return c.COLOR_RANGES.ORANGE_LOWER_LIM;
      break;
    case c.COLORS.YELLOW:
      return c.COLOR_RANGES.YELLOW_LOWER_LIM +1;
      break;
    case c.COLORS.GREEN:
      return c.COLOR_RANGES.GREEN_LOWER_LIM +1;
      break;
    case c.COLORS.BLUE:
      return c.COLOR_RANGES.BLUE_LOWER_LIM +1;
      break;
    default:
      return 0;
  }
}
function generateTestVariables() {
  var data = {};
  var default_data = {
    _id: "",
    userId: '1',
    name: 'Juancho',
    description: 'Descripcion',
    good: true,
    bad: false,
    difficulty: '2'
  }
  data.default_data = copyObject(default_data);
  //Generate Good
  for(color in c.COLORS){
    for(difficulty in c.DIFFICULTY_NAME){
        var entry = copyObject(default_data);
        entry.good = true;
        entry.bad = false;
        entry.difficulty = c.DIFFICULTY_NAME[difficulty];
        entry.color = color;
        entry.score = getScore(color);
        data["GOOD_" + difficulty + "_" + color] = entry;
    }
  }
  //Generate Bad
  for(color in c.COLORS){
    for(difficulty in c.DIFFICULTY_NAME){
        var entry = copyObject(default_data);
        entry.good = false;
        entry.bad = true;
        entry.difficulty = c.DIFFICULTY_NAME[difficulty];
        entry.color = color;
        entry.score = getScore(color);
        data["BAD_" + difficulty + "_" + color] = entry;
    }
  }
  //generate Both
  for(color in c.COLORS){
    for(difficulty in c.DIFFICULTY_NAME){
        var entry = copyObject(default_data);
        entry.good = true;
        entry.bad = true;
        entry.difficulty = c.DIFFICULTY_NAME[difficulty];;
        entry.color = color;
        entry.score = getScore(color);
        data["BOTH_" + difficulty + "_" + color] = entry;
    }
  }
  return data
}


module.exports = generateTestVariables();
