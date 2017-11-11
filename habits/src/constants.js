function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("DIFFICULTY", [
  "EASY",
  "MEDIUM",
  "HARD"
]);

define("TYPE", [
  "GOOD",
  "BAD",
  "BOTH"
]);

define("COLORS", {
  "RED": "RED",
  "ORANGE": "ORANGE",
  "YELLOW": "YELLOW",
  "BLUE": "BLUE"
});
