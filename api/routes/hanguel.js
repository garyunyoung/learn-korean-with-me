var express = require("express");
var router = express.Router();

const { Client } = require("pg");
const connectionString = "postgresql://postgres@localhost:5432/hanguel";

router.get("/", function(req, res, next) {
  const client = new Client({
    connectionString: connectionString
  });
  client.connect();
  client.query(
    // TO DO: find a more efficient way of returning a random record
    "SELECT * FROM hanguel ORDER BY random() LIMIT 1",
    (err, result) => {
      client.end();
      res.send(result.rows[0]);
    }
  );
});

module.exports = router;
