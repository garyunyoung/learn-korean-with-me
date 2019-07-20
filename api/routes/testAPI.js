var express = require("express");
var router = express.Router();

const words = ["one", "two", "three", "four"];

function randomWord() {
  return words[Math.floor(Math.random() * (words.length - 1))];
}

router.get("/", function(req, res, next) {
  res.send(randomWord());
});

module.exports = router;
