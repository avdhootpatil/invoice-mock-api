var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var getOrganizations = require("./data/getOrganizations");
var getJobs = require("./data/getJobs");
var getVendorePaymentsById = require("./data/getVendorPaymentsById");
var getModeOfPayments = require("./data/getModaOfPayments");
var getGeneralLedgers = require("./data/getGeneralLedgers");
var getTaxRatesFromTaxGroup = require("./data/getTaxRatesFromTaxGroup");
var getTaxCategories = require("./data/getTaxCategories");
var getBranchById = require("./data/getBranchById");
var getStates = require("./data/getStates");
var getCurrencies = require("./data/getCurrencies");
var getCountries = require("./data/getCountries");
var getCurrencies = require("./data/getCurrencies");
var getBranchById = require("./data/getBranchById");
const getwhTaxes = require("./data/getWhTaxes");
var getPurchaseList = require("./data/getPurchaseList");
var postTaxHeads = require("./data/postTaxHeads");

app.get("/organizations", function (req, res) {
  console.log("/organizations");
  res.status(200).send(getOrganizations());
});

app.get("/jobs", function (req, res) {
  console.log("/jobs");
  res.status(200).send(getJobs());
});

app.get("/vendorpayments/:id", function (req, res) {
  console.log("/vendorpayments");
  res.status(200).send(getVendorePaymentsById());
});

app.get("/paymentmodes", function (req, res) {
  console.log("/modeofpayments");
  res.status(200).send(getModeOfPayments());
});

app.get("/general-ledgers", function (req, res) {
  console.log("/general-ledgers");
  res.status(200).send(getGeneralLedgers());
});

app.get("/taxgroups/GST/tax-rates", function (req, res) {
  console.log("/taxRates of GST");
  res.status(200).send(getTaxRatesFromTaxGroup());
});

app.get("/countries/IN/tax-Categories", function (req, res) {
  console.log("/taxRates of GST");
  res.status(200).send(getTaxCategories());
});

app.get("/organizations/:id/branches", function (req, res) {
  console.log("/getBranchById");
  res.status(200).send(getBranchById());
});

app.get("/countries/IN/states", function (req, res) {
  console.log("/states");
  res.status(200).send(getStates());
});

app.get("/currencies", function (req, res) {
  console.log("/currencies");
  res.status(200).send(getCurrencies());
});

app.get("/countries", function (req, res) {
  console.log("/countries");
  res.status(200).send(getCountries());
});

app.get("/currencies", function (req, res) {
  console.log("/currencies");
  res.status(200).send(getCurrencies());
});

app.get("/organizations/:id/branches", function (req, res) {
  console.log("/getBranchById");
  res.status(200).send(getBranchById());
});

app.get("/wh-taxes", function (req, res) {
  console.log("/wh-taxes");
  res.status(200).send(getwhTaxes());
});

app.get("/purchase", function (req, res) {
  console.log("/purchase");
  res.status(200).send(getPurchaseList());
});

app.post("/retrievebills", function (req, res) {
  console.log("/retrievebills");
  res.status(200).send(getPurchaseList());
});

app.post("/vendor-payments/tax-heads", function (req, res) {
  console.log("/taxheads", req.body);
  res.status(201).send(postTaxHeads());
});

app.post("/vendor-payments", function (req, res) {
  console.log("/vendor-payments", req.body);
  res.status(201).send({ message: "successfully posted" });
});

app.listen(6006, () => {
  console.log("Server started at 6006");
});
