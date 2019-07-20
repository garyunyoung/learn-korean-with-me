var express = require("express");
var router = express.Router();
var alphabet = require("../public/javascripts/hanguel.js");

function randomHanguel() {
  return alphabet[Math.floor(Math.random() * (alphabet.length - 1))];
}

router.get("/", function(req, res, next) {
  res.send(randomHanguel());
});

module.exports = router;
