var express = require("express");
var router = express.Router();
const { Client } = require("pg");
const connectionString = "postgresql://postgres@localhost:5432/hanguel";

router.get("/", function(req, res, next) {
  const client = new Client({
    connectionString: connectionString
  });
  client.connect();
  client.query("SELECT * FROM hanguel", (err, result) => {
    console.log(result);
    client.end();
    res.send(result.rows);
  });
});

module.exports = router;
