var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

const getAssets = require("./data/getAssets");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/chartofaccounts", function (req, res) {
  console.log("/getAssets");
  res.status(200).send(getAssets());
});

app.listen(6001, () => {
  console.log("Server started at 6001");
});
