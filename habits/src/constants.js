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

define("TYPE_NAME", {
  "0": "GOOD",
  "1": "BAD",
  "2": "BOTH"
});

define("TYPE_VALUE", {
  "GOOD": "1",
  "BAD": "2",
  "BOTH": "3"
});

define("SCORE", {
  "GOOD": 2,
  "BAD": 4,
  "BOTH": 6,
  "GOOD_FROM_BLUE": 1,
  "BAD_FROM_ORANGE": 1.5,
  "BAD_FROM_RED": 2
});

define("COLORS", {
  "RED": "RED",
  "ORANGE": "ORANGE",
  "YELLOW": "YELLOW",
  "GREEN": "GREEN",
  "BLUE": "BLUE"
});
