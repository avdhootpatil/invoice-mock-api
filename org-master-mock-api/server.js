var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var getOrganisationData = require("./data/getOrganisationData");

app.get("/organisation", function (req, res) {
  console.log("/organisation");
  res.status(200).send(getOrganisationData());
});

app.listen(6001, () => {
  console.log("Server started at 6001");
});
