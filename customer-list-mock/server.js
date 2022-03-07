var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var getCustomerReceipts = require("./data/getCustomerReceipts");
var getOrganizations = require("./data/getOrganizations");
var getCountries = require("./data/getCountries");
var getCurrencies = require("./data/getCurrencies");

app.get("/customer-receipts", function (req, res) {
  console.log("/customerreceipts");
  res.status(200).send(getCustomerReceipts());
});

app.delete("/customerreceipts/:id", function (req, res) {
  console.log("purchase deleted");
  res.status(200).send("success");
});

app.get("/api/organisations", function (req, res) {
  console.log("/organizations");
  res.status(200).send(getOrganizations());
});

app.get("/countries", function (req, res) {
  console.log("/countries");
  res.status(200).send(getCountries());
});

// app.get("/countries/IN/states", function (req, res) {
//   console.log("/states");
//   res.status(200).send(getStates());
// });

app.get("/currencies", function (req, res) {
  console.log("/currencies");
  res.status(200).send(getCurrencies());
});

app.listen(6005, () => {
  console.log("Server started at 6005");
});
