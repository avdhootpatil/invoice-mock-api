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
var taxGroups = require("./data/getTaxGroups");
var getChargesByJobId = require("./data/getChargesById");
const getJournalEntries = require("./data/getJournalEntries");

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

app.get("/jobs/:id/charges", function (req, res) {
  res.status(200).send(getChargesByJobId());
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

app.get("/companies/currency-code", function (req, res) {
  console.log("/currency-code");
  res.status(200).send("DHR");
});

app.get("/goodsandservices/:id", function (req, res) {
  console.log("/goodsandservices/:id");
  if (req.params.id === 1) {
    res.status(200).send({
      id: 71,
      type: "G",
      name: "1.5 Tonne AC",
      code: "",
      chargeCategory: { id: 3, name: "Revenue" },
      unitsOfMeasurement: {
        id: 48,
        code: "NOS",
        description: "Number",
        type: "Number",
      },
      goodsAndServicesGroup: { id: 8, name: "White Goods" },
      taxGroup: { name: "VAT", code: "VAT" },
      taxCategory: {
        id: 9862,
        code: "84151010",
        name: "",
        taxGroup: null,
        baseRate: 100.0,
      },
      taxRate: { name: "VAT5", rate: 5.0 },
      costGL: null,
      incomeGL: {
        id: 21342,
        name: "Product 1 Sales",
        code: "IDS0004020",
        type: "I",
        group: "O",
        currency: null,
      },
      costCurrency: { id: 335, code: "AED", name: null, currencyCode: null },
      salesCurrency: { id: 335, code: "AED", name: null, currencyCode: null },
      salesPrice: 10000.0,
      costPrice: 0.0,
      abatement: 0.0,
      cessRate: 0.0,
    });
  } else if (req.params.id === 19) {
    res.status(200).send({
      id: 72,
      type: "S",
      name: "AC Servicing",
      code: "",
      chargeCategory: { id: 1, name: "Margin" },
      unitsOfMeasurement: {
        id: 48,
        code: "NOS",
        description: "Number",
        type: "Number",
      },
      goodsAndServicesGroup: null,
      taxGroup: { name: "VAT", code: "VAT" },
      taxCategory: {
        id: 9872,
        code: "84159000",
        name: "",
        taxGroup: null,
        baseRate: 100.0,
      },
      taxRate: { name: "VAT5", rate: 5.0 },
      costGL: {
        id: 21360,
        name: "Direct Labor Costs",
        code: "EDD0005100",
        type: "E",
        group: "O",
        currency: null,
      },
      incomeGL: {
        id: 21343,
        name: "Product 2 Sales",
        code: "IDS0004040",
        type: "I",
        group: "O",
        currency: null,
      },
      costCurrency: { id: 335, code: "AED", name: null, currencyCode: null },
      salesCurrency: { id: 335, code: "AED", name: null, currencyCode: null },
      salesPrice: 1000.0,
      costPrice: 500.0,
      abatement: 0.0,
      cessRate: 0.0,
    });
  }
  res.status(200).send(getGoodsAndServicesById());
});

app.get("/organisations/:id/branches", function (req, res) {
  console.log("/getBranchById");
  res.status(200).send(getBranchById());
});

app.get("/countries/:id/tax-groups", (req, res) => {
  console.log("tacxGroups");
  res.status(200).send(taxGroups());
});

app.get("/companies/country-code", (req, res) => {
  console.log("countryCode");
  res.status(200).send("IN");
});

app.get("/invoices/:id", function (req, res) {
  console.log("/invoiceById");
  res.status(200).send(getInvoiceById());
});

app.post("/invoices/due-date", function (req, res) {
  console.log(req.data);
  res.status(200).send("2020-10-10T06:19:17.923");
});

app.post("/AccHelper.asmx/GetJounalEntry", function (req, res) {
  console.log("/journalEntries");
  res.status(200).send(getJournalEntries());
});

app.post("/invoices/tax-heads", function (req, res) {
  console.log("/taxheads", req.body);
  if (req.body.hasLUT === "YES") {
    res.status(201).send(postTaxHeads());
  } else {
    res.status(201).send([
      {
        invoiceId: 0,
        taxAmount: 16.2,
        code: "GST",
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
  // res.status(201).send({ id: 1 });
  res.status(400).send({
    message: "The request is invalid.",
    modelState: {
      customerBranch: ["Branch is required"],
      customer: ["Customer is required"],
      currency: ["currency is required"],
      lineItems: ["at least one"],
    },
  });
});

app.put("/invoice/:id", function (req, res) {
  console.log("/invoice  => put request");
  res.status(201).send();
});

app.listen(6005, () => {
  console.log("Server started at 6005");
});
