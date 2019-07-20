var express = require("express");
var router = express.Router();

const alphabet = [
  {
    character: "ᄈ",
    hanguel: "bb"
  },
  {
    character: "ᄊ",
    hanguel: "ss"
  },
  {
    character: "ᅡ",
    hanguel: "a"
  },
  {
    character: "ᄅ",
    hanguel: "r/l"
  }
];

function randomCharacter() {
  return alphabet[Math.floor(Math.random() * (alphabet.length - 1))];
}

router.get("/", function(req, res, next) {
  res.send(randomCharacter());
});

module.exports = router;
