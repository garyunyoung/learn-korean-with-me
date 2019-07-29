var express = require("express");
var router = express.Router();
const { Client } = require("pg");
const connectionString = "postgresql://postgres@localhost:5432/hanguel";

/* GET home page. */
router.get("/", function(req, res, next) {
  // connect to database
  const client = new Client({
    connectionString: connectionString
  });
  client.connect();
  client.query("SELECT NOW()", (err, result) => {
    console.log(result);
    client.end();
    res.send({ title: result.rows[0].now });
  });
});

module.exports = router;
