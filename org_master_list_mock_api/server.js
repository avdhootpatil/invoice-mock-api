var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var getOrgMasters = require("./data/getOrgMasters");

app.get("/organisations", function (req, res) {
  console.log("/organisations");
  res.status(200).send(getOrgMasters());
});

app.delete("/organisations/:id", function (req, res) {
  console.log("/organisations/:id");
  res.status(200).send({ message: "deleted" });
});

app.listen(6001, () => {
  console.log("Server started at 6001");
});
