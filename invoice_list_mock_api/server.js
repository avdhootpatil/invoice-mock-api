var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var getInvoiceList = require("./data/getInvoiceList");
var getOrganizations = require("./data/getOrganizations");
var getCountries = require("./data/getCountries");
var getCurrencies = require("./data/getCurrencies");

app.get("/invoice", function (req, res) {
  console.log("/invoices");
  res.status(200).send(getInvoiceList());
});

app.get("/organisations", function (req, res) {
  console.log("/organisations");
  res.status(200).send(getOrganizations());
});

app.get("/countries", function (req, res) {
  console.log("/countries");
  res.status(200).send(getCountries());
});

app.get("/currencies", function (req, res) {
  console.log("/currencies");
  res.status(200).send(getCurrencies());
});

app.listen(6003, () => {
  console.log("Server started at 6003");
});
