var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var getOrganizations = require("./data/getOrganizations");
var getJobs = require("./data/getJobs");
var getCustomerReceiptById = require("./data/getCustomerReceiptById");
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
var getChequeStocks = require("./data/getChequeStocks");
const getLocations = require("./data/getLocations");
const getAnnexures = require("./data/getAnnexures");
var getOrganizationById = require("./data/getOrganizationById");
var getUsdByOrgId = require("./data/getUsdOrgById");
const getJournalEntries = require("./data/getJournalEntries");

app.get("/organisations", function (req, res) {
  console.log("/organizations");
  res.status(200).send(getOrganizations());
});

app.get("/general-ledgers/:id/number-series", function (req, res) {
  console.log("numbering-setup");
  res
    .status(200)
    .send({ number: 1, prefix: "Jun", suffix: "/21-22", seriesId: 0 });
});

app.get("/organisations/:id", function (req, res) {
  console.log("/organizations");
  if (req.params.id === "2056") {
    console.log("first org");
    res.status(200).send(getOrganizationById());
  } else if (req.params.id === "15005") {
    console.log("first org");
    res.status(200).send(getUsdByOrgId());
  } else {
    console.log("third org");
    res.status(200).send(getOrganizationById());
  }
});

app.post("/AccHelper.asmx/GetJounalEntry", function (req, res) {
  console.log("/journalEntries");
  res.status(200).send(getJournalEntries());
});
app.get("/jobs", function (req, res) {
  console.log("/jobs");
  res.status(200).send(getJobs());
});

app.get("/customer-receipts/:id", function (req, res) {
  console.log("/vendorpayments");
  res.status(200).send(getCustomerReceiptById());
});

app.get("/presets/paymentmodes", function (req, res) {
  console.log("/modeofpayments");
  res.status(200).send(getModeOfPayments());
});

app.get("/presets/chequestocks/:id", function (req, res) {
  console.log("/modeofpayments");
  res.status(200).send(getChequeStocks());
});

app.get("/presets/locations", function (req, res) {
  console.log("/locations");
  res.status(200).send(getLocations());
});

app.get("/presets/annexures", function (req, res) {
  console.log("/annexures");
  res.status(200).send(getAnnexures());
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

app.get("/organisations/:id/branches", function (req, res) {
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

app.get("/companies/currency-code", function (req, res) {
  console.log("/currency-code");
  res.status(200).send("DHR");
});

app.get("/companies/country-code", function (req, res) {
  console.log("/country-code");
  res.status(200).send("IN");
});

app.post("/customer-receipts/retrieve-bills", function (req, res) {
  console.log("/retrievebills");
  res.status(200).send(getPurchaseList());
});

app.post("/customer-receipts/tax-heads", function (req, res) {
  console.log("/taxheads", req.body);
  res.status(201).send(postTaxHeads());
});

app.post("/customerreceipts", function (req, res) {
  console.log("/customer-receipts", req.body);
  // res.status(201).send({ id: 1 });
  res.status(400).send({
    message: "invalid request",
    modelState: {
      paymentMode: ["mode of payments is required"],
      cashGL: ["required"],
      currency: ["reuierd"],
      voucherAdvances: [
        "You cannot add multiple advances for the same location",
      ],
    },
  });
  // res.status(500).send();
});

app.listen(6008, () => {
  console.log("Server started at 6008");
});
