var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

var getOrganizations = require("./data/getOrganizations");
var getInvoicePresets = require("./data/getInvoicePresets");
var getCountries = require("./data/getCountries");
var getStates = require("./data/getStates");
var getBranchById = require("./data/getBranchById");
var getJobs = require("./data/getJobs");
var getInvoiceById = require("./data/getInvoiceById");
var getCurrencies = require("./data/getCurrencies");
var getGoodsAndServices = require("./data/getGoodsAndServices");
var getGoodsAndServicesById = require("./data/getGoodsAndServicesById");
var postTaxHeads = require("./data/postTaxHeads");
var getOrganizationById = require("./data/getOrganizationById");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/organisations/:id", function (req, res) {
  console.log("/organisation/:id");
  res.status(200).send(getOrganizationById());
});

app.get("/organisations", function (req, res) {
  console.log("/organisations");
  res.status(200).send(getOrganizations());
});

app.get("/numbering-setup", function (req, res) {
  console.log("/organisation/:id");
  res
    .status(200)
    .send({ number: 0, prefix: "Jun", suffix: "/21-22", seriesId: 0 });
});

app.get("/cost-centers", function (req, res) {
  console.log("/invoice presets");
  res.status(200).send(getInvoicePresets());
});

app.get("/remarks", function (req, res) {
  console.log("/remarks");
  res.status(200).send("remark test");
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

app.get("/invoice/:id", function (req, res) {
  console.log("/invoiceById");
  res.status(200).send(getInvoiceById());
});

app.post("/invoice/due-date", function (req, res) {
  console.log(req.data);
  res.status(200).send("2020-10-10T06:19:17.923");
});

app.post("/invoice/tax-heads", function (req, res) {
  console.log("/taxheads", req.body);
  if (req.body.hasLUT === "YES") {
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
    ]);
  }
});

app.post("/invoice/approval-required", function (req, res) {
  console.log("/invoice/approval-required ");
  res.status(201).send(true);
});

app.post("/invoice", function (req, res) {
  console.log("/invoice  => post request");
  console.log(req.body.isDraft);
  res.status(201).send({ id: 1 });
});

app.put("/invoice/:id", function (req, res) {
  console.log("/invoice  => put request");
  res.status(201).send();
});

app.listen(6001, () => {
  console.log("Server started at 6001");
});
