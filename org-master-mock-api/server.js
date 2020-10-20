var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var getOrganisationData = require("./data/getOrganisationData");
var getCountries = require("./data/getCountries");
var getStates = require("./data/getStates");
var getCities = require("./data/getCities");

app.get("/organisation", function (req, res) {
  console.log("/organisation");
  res.status(200).send(getOrganisationData());
});

app.get("/countries", function (req, res) {
  console.log("/countries");
  res.status(200).send(getCountries());
});

app.get("/states", function (req, res) {
  console.log("/states");
  res.status(200).send(getStates());
});

app.get("/cities", function (req, res) {
  console.log("/cities");
  res.status(200).send(getCities());
});

app.listen(6001, () => {
  console.log("Server started at 6001");
});
