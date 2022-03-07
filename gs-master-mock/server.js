var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var getUnits = require("./data/getUOM");
var taxRates = require("./data/getTaxRates");
var taxGroups = require("./data/getTaxGroups");
var incomeGL = require("./data/getIncomeGls");
var hsCodes = require("./data/getTaxCategories");
var gsGroups = require("./data/getGSGroups");
var costGl = require("./data/getCostGls");
var chargeCategories = require("./data/getChargeCategories");
var getById = require("./data/getById");
var getTaxCategories = require("./data/getTaxCategories");

app.get("/units", function (req, res) {
  console.log("/units");

  let qryName = req.query.desc;
  let qryCode = req.query.code;

  let nextData = getUnits();
  if (qryName && qryCode) {
    nextData = nextData.filter(
      (item) =>
        item.description.toLowerCase().startsWith(qryName.toLowerCase()) &&
        item.code.toLowerCase().startsWith(qryCode.toLowerCase())
    );
  } else if (qryName) {
    console.log("qryName", qryName);
    nextData = nextData.filter((item) =>
      item.description.toLowerCase().startsWith(qryName.toLowerCase())
    );
  } else if (qryCode) {
    nextData = nextData.filter((item) =>
      item.code.toLowerCase().startsWith(qryCode.toLowerCase())
    );
  }

  res.status(200).send(nextData);
});

app.get("/taxgroups/GST/tax-rates", (req, res) => {
  res.status(200).send(taxRates.gstTaxRates);
});

app.get("/taxgroups/VAT/tax-rates", (req, res) => {
  res.status(200).send(taxRates.vatTaxRates);
});

app.get("/countries/:id/tax-groups", (req, res) => {
  console.log("tacxGroups");
  res.status(200).send(taxGroups());
});

app.get("/general-ledgers", (req, res) => {
  res.status(200).send(incomeGL());
});

app.get("/countries/:id/tax-categories", (req, res) => {
  res.status(200).send(hsCodes());
});

app.get("/goodsAndServicesGroup", (req, res) => {
  res.status(200).send(gsGroups());
});

app.get("/companies/country-code", function (req, res) {
  console.log("/home-currency");
  res.status(200).send("INR");
});

app.get("/general-ledgers", (req, res) => {
  res.status(200).send(costGl());
});

app.get("/charge-categories", (req, res) => {
  res.status(200).send(chargeCategories());
});

app.post("/goodsandservices", (req, res) => {
  // res.status(200).send({ id: 1 });
  res.status(400).send({
    message: "invalid request.",
    modelState: {
      // "model.taxCategory": ["required"],
      taxGroup: ["error"],
      taxCategory: ["error"],
    },
  });
  // res.status(500).send();
});

app.put("/goodsandservices/:id", (req, res) => {
  // res.status(200).send();
  // res.status(400).send({
  //   message: "invalid request.",
  //   modelState: {
  //     "model.TaxGroup": ["error"],
  //     "model.TaxCategory": ["error"],
  //   },
  // });
  res.status(500).send();
});

app.get("/goodsandservices/:id", (req, res) => {
  res.status(200).send(getById());
});

app.listen(7000, () => {
  console.log("Server started at 7000 - gs master");
});
