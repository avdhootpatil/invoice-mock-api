var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var getVendorPayments = require("./data/getVendorPayments");
var getOrganizations = require("./data/getOrganizations");
// var getCountries = require("./data/getCountries");
// var getCurrencies = require("./data/getCurrencies");

app.get("/vendor-payments", function (req, res) {
  console.log("/vendorpayments");
  res.status(200).send(getVendorPayments());
});

// app.get("/organisations", function (req, res) {
//   console.log("/organisations");
//   res.status(200).send(getOrganizations());
// });

// app.get("/countries", function (req, res) {
//   console.log("/countries");
//   res.status(200).send(getCountries());
// });

// app.get("/currencies", function (req, res) {
//   console.log("/currencies");
//   res.status(200).send(getCurrencies());
// });

app.get("/organisations", function (req, res) {
  console.log("/organizations");
  res.status(200).send(getOrganizations());
});

app.delete("/vendor-payments/:id", function (req, res) {
  console.log("purchase deleted");
  res.status(200).send("success");
});

app.listen(7000, () => {
  console.log("Server started at 7000");
});
