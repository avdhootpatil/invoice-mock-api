var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

var getOrganizations = require("./data/getOrganizations");
var getInvoicePresets = require("./data/getInvoicePresets");
var getCountries = require("./data/getCountries");
var getStates = require("./data/getStates");
var getBranchById = require("./data/getBranchById");
var getBranches = require("./data/getBranches");
var getJobs = require("./data/getJobs");
var getInvoiceById = require("./data/getInvoiceById");
var getCurrencies = require("./data/getCurrencies");
var getGoodsAndServices = require("./data/getGoodsAndServices");
var getGoodsAndServicesById = require("./data/getGoodsAndServicesById");
var postTaxHeads = require("./data/postTaxHeads");
var getTaxRatesFromTaxGroup = require("./data/getTaxRatesFromTaxGroup");
var getGeneralLedgers = require("./data/getGeneralLedgers");
var getTaxCategories = require("./data/getTaxCategories");
var getWhTaxes = require("./data/getWhTaxes");
const getwhTaxes = require("./data/getWhTaxes");
var getOrganizationById = require("./data/getOrganizationById");
var taxGroups = require("./data/getTaxGroups");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/organisations/:id", function (req, res) {
  console.log("/organisation/:id");
  res.status(200).send(getOrganizationById());
});

app.get("/purchase/numbering-setup", function (req, res) {
  console.log("/organisation/:id");
  res
    .status(200)
    .send({ number: 0, prefix: "Jun", suffix: "/21-22", seriesId: 12 });
});

app.get("/organisations", function (req, res) {
  console.log("/organizations");
  res.status(200).send(getOrganizations());
});

app.get("/invoice/presets", function (req, res) {
  console.log("/invoice presets");
  res.status(200).send(getInvoicePresets());
});

app.get("/countries", function (req, res) {
  console.log("/countries");
  res.status(200).send(getCountries());
});

app.get("/countries/IN/states", function (req, res) {
  console.log("/states");
  res.status(200).send(getStates());
});

app.get("/currencies", function (req, res) {
  console.log("/currencies");
  res.status(200).send(getCurrencies());
});

app.get("/jobs", function (req, res) {
  console.log("/jobs");
  res.status(200).send(getJobs());
});

app.get("/goodsandservices", function (req, res) {
  console.log("/goodsandservices");
  res.status(200).send(getGoodsAndServices());
});

app.get("/goodsandservices/:id", function (req, res) {
  console.log("/goodsandservices/:id");
  res.status(200).send(getGoodsAndServicesById());
});

app.get("/organisations/:id/branches", function (req, res) {
  console.log("/getBranchById");
  res.status(200).send(getBranchById());
});

app.get("/purchase/:id", function (req, res) {
  console.log("/invoiceById");
  res.status(200).send(getInvoiceById());
});

app.get("/taxgroups/GST/tax-rates", function (req, res) {
  console.log("/taxRates of GST");
  res.status(200).send(getTaxRatesFromTaxGroup());
});

app.get("/countries/IN/tax-Categories", function (req, res) {
  console.log("/taxRates of GST");
  res.status(200).send(getTaxCategories());
});

app.get("/taxgroups/VAT/tax-rates", function (req, res) {
  console.log("/taxRates of VAT");
  res.status(200).send(getTaxRatesFromTaxGroup());
});

app.get("/general-ledgers", function (req, res) {
  console.log("/general-ledgers");
  res.status(200).send(getGeneralLedgers());
});

app.get("/wh-taxes", function (req, res) {
  console.log("/wh-taxes");
  res.status(200).send(getwhTaxes());
});

app.get("/companies/country-code", (req, res) => {
  console.log("countryCode");
  res.status(200).send("IN");
});

app.get("/countries/:id/tax-groups", (req, res) => {
  console.log("tacxGroups");
  res.status(200).send(taxGroups());
});

app.get("/countries/code", (req, res) => {
  console.log("countryCode");
  res.status(200).send("IN");
});

app.post("/purchase/due-date", function (req, res) {
  console.log(req.data);
  res.status(200).send("2020-10-04T06:19:17.923");
});

app.post("/purchase/tax-heads", function (req, res) {
  console.log("/taxheads", req.body);
  if (req.body.placeOfSupply.name === "maharashtra") {
    res.status(201).send(postTaxHeads());
  } else {
    res.status(201).send([
      {
        invoiceId: 0,
        taxAmount: 16.2,
        code: "SGST",
        taxRatePart: 50.0,
        taxType: "GST",
        applicableOn: "ITEM",
      },
      {
        invoiceId: 0,
        taxAmount: 16.2,
        code: "CGST",
        taxRatePart: 50.0,
        taxType: "GST",
        applicableOn: "ITEM",
      },
      // {
      //   invoiceId: 0,
      //   taxAmount: 16.2,
      //   code: "IGST",
      //   taxRatePart: 20.0,
      //   taxType: "GST",
      //   applicableOn: "ITEM",
      // },
      // {
      //   invoiceId: 0,
      //   taxAmount: 16.2,
      //   code: "UTGST",
      //   taxRatePart: 20.0,
      //   taxType: "GST",
      //   applicableOn: "ITEM",
      // },
      // {
      //   invoiceId: 0,
      //   taxAmount: 16.2,
      //   code: "KFC",
      //   taxRatePart: 20.0,
      //   taxType: "GST",
      //   applicableOn: "ITEM",
      // },
    ]);
  }
});

app.post("/purchase/approval-required", function (req, res) {
  console.log("/purchase/approval-required ");
  res.status(201).send(true);
});

// purchase/approval
app.post("/purchase/approval", function (req, res) {
  console.log("/purchase/approval-required ");
  res.status(201).send(true);
});

app.post("/purchase", function (req, res) {
  console.log("/purchase  => post request");
  // console.log(req.body.pl);
  // if(req.body.placeOfSupply.name === "maharashtra")
  res.status(201).send({ id: 1 });
});

app.listen(6005, () => {
  console.log("Server started at 6005");
});
