var express = require("express");
var router = express.Router();

const alphabet = [
  {
    character: "ᄈ",
    hanguel: "bb",
    type: "consonant"
  },
  {
    character: "ᄊ",
    hanguel: "ss",
    type: "consonant"
  },
  {
    character: "ᅡ",
    hanguel: "a",
    type: "vowel"
  },
  {
    character: "ᄅ",
    hanguel: "r/l",
    type: "consonant"
  }
];

function randomCharacter() {
  return alphabet[Math.floor(Math.random() * (alphabet.length - 1))];
}

router.get("/", function(req, res, next) {
  res.send(randomCharacter());
});

module.exports = router;
