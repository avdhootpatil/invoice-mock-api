var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

var getGoodsAndServices = require("./data/getGoodsAndServices");
var getCustomerReceipts = require("./data/getCustomerReceipts");
var getOrganizations = require("./data/getOrganizations");
var getVendorPayments = require("./data/getVendorPayments");
var getPurchaseList = require("./data/getPurchaseList");
var getCountries = require("./data/getCountries");
var getCurrencies = require("./data/getCurrencies");
const getJournalEntries = require("./data/getJournalEntries");
const getExpenseVouchers = require("./data/getExpenseVouchers");
var getGroupMasterList = require("./data/getGroupMasterList");
const getDebitNotes = require("./data/getDebitNotes");
var getJobs = require("./data/getJobs");
var getInvoicePresets = require("./data/getInvoicePresets");
var hsCodes = require("./data/getTaxCategories");
var getUnits = require("./data/getUOM");
var GL = require("./data/getIncomeGls");
var getModeOfPayments = require("./data/getModaOfPayments");
var getInvoiceList = require("./data/getInvoiceList");
const getCreditNotes = require("./data/getCreditNotes");
const geteinvoices = require("./data/geteinvoices");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/invoices", function (req, res) {
  console.log("/invoices");
  res.status(200).send(getInvoiceList());
});

app.get("/goodsandservices", function (req, res) {
  console.log("/goodsandservices");
  res.status(200).send(getGoodsAndServices());
});

app.get("/customer-receipts", function (req, res) {
  console.log("/customerreceipts");
  res.status(200).send(getCustomerReceipts());
});

app.get("/einvoicesetup", function (req, res) {
  console.log("/einvoicesetup");
  res.status(200).send(geteinvoices());
});

app.get("/credit-note", function (req, res) {
  res.status(200).send(getCreditNotes());
});

app.get("/organisations", function (req, res) {
  console.log("/organizations");
  res.status(200).send(getOrganizations());
});

app.get("/vendor-payments", function (req, res) {
  console.log("/vendorpayments");
  res.status(200).send(getVendorPayments());
});

app.get("/purchase", function (req, res) {
  console.log("/purchase");
  res.status(200).send(getPurchaseList());
});

app.get("/countries", function (req, res) {
  console.log("/countries");
  res.status(200).send(getCountries());
});

app.get("/currencies", function (req, res) {
  console.log("/currencies");
  res.status(200).send(getCurrencies());
});

app.get("/journal-entries", function (req, res) {
  console.log("/journal-entries");
  res.status(200).send(getJournalEntries());
});

app.get("/expenseVoucher", function (req, res) {
  console.log("/expenseVoucher");
  res.status(200).send(getExpenseVouchers());
});

app.get("/goodsAndServicesGroup", function (req, res) {
  console.log("/list");
  res.status(200).send(getGroupMasterList());
});

app.get("/debit-notes", function (req, res) {
  res.status(200).send(getDebitNotes());
});

app.get("/jobs", function (req, res) {
  console.log("/jobs");
  res.status(200).send(getJobs());
});

app.get("/cost-centers", function (req, res) {
  console.log("/invoice presets");
  res.status(200).send(getInvoicePresets());
});

app.get("/hsCodes", (req, res) => {
  res.status(200).send(hsCodes());
});

app.get("/units", function (req, res) {
  console.log("/units");

  let qryName = req.query.desc;
  let qryCode = req.query.code;

  let nextData = getUnits();
  // if (qryName && qryCode) {
  //   nextData = nextData.filter(
  //     (item) =>
  //       item.description.toLowerCase().startsWith(qryName.toLowerCase()) &&
  //       item.code.toLowerCase().startsWith(qryCode.toLowerCase())
  //   );
  // } else if (qryName) {
  //   console.log("qryName", qryName);
  //   nextData = nextData.filter((item) =>
  //     item.description.toLowerCase().startsWith(qryName.toLowerCase())
  //   );
  // } else if (qryCode) {
  //   nextData = nextData.filter((item) =>
  //     item.code.toLowerCase().startsWith(qryCode.toLowerCase())
  //   );
  // }

  res.status(200).send(nextData);
});

app.get("/general-ledgers", (req, res) => {
  res.status(200).send(GL());
});

app.get("/presets/paymentmodes", function (req, res) {
  console.log("/modeofpayments");
  res.status(200).send(getModeOfPayments());
});

app.post("/einvoicesetup", function (req, res) {
  console.log("/einvoicesetup");
  res.status(200).send({ message: "success" });
});

app.listen(6010, () => {
  console.log("Server started at 6010");
});
