var express = require("express");
var router = express.Router();
var alphabet = require("../public/javascripts/hanguel.js");

router.get("/", function(req, res, next) {
  res.send(alphabet);
});

module.exports = router;
