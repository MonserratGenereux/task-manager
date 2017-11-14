function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("DIFFICULTY", {
  "0": "EASY",
  "1": "MEDIUM",
  "2": "HARD"
});

define("DIFFICULTY_NAME", {
  "EASY": "0",
  "MEDIUM": "1",
  "HARD": "2"
});

define("SCORE", {
  "EASY": 2,
  "MEDIUM": 4,
  "HARD": 6,
  "BLUE_INCREASE": 1,
  "GREEN_INCREASE": .5,
  "ORANGE_DECREASE": 1.5,
  "RED_DECREASE": 2
});

define("COLOR_RANGES",{
  "RED_UPPER_LIM": 0,
  "ORANGE_LOWER_LIM": 0,
  "YELLOW_LOWER_LIM": 10,
  "GREEN_LOWER_LIM": 40,
  "BLUE_LOWER_LIM": 50
})

define("COLORS", {
  "RED": "RED",
  "ORANGE": "ORANGE",
  "YELLOW": "YELLOW",
  "GREEN": "GREEN",
  "BLUE": "BLUE"
});

define("MONGO_PATH", "mongodb://localhost/habits");
