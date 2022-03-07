var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

var getOrganizations = require("./data/getOrganizations");
var getInvoicePresets = require("./data/getInvoicePresets");
var getCountries = require("./data/getCountries");
var getStates = require("./data/getStates");
var getBranchesById = require("./data/getBranchesById");
var getBranchById = require("./data/getBranchById");
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
const getPaymentmodes = require("./data/getPaymentmodes");
const getTranscationTypes = require("./data/getTranscationTypes");
const getChequeStock = require("./data/getChequeStock");
const getRemarks = require("./data/getRemarks");
const getVatTaxRates = require("./data/getVatTaxRates");
const getNumberSeries = require("./data/getNumberSeries");
const getOrganisationById = require("./data/getOrgById");
const getExpenseVouchers = require("./data/getExpenseVouchers");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/organisations", function (req, res) {
  console.log("/organizations");
  res.status(200).send(getOrganizations());
});

app.get("/organisations/:id", function (req, res) {
  console.log("/organizations");
  res.status(200).send(getOrganisationById());
});

app.get("/cost-centers", function (req, res) {
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
  console.log("/getBranchsById");
  res.status(200).send(getBranchesById());
});

app.get("/organisations/:id/branches/:branchId", function (req, res) {
  console.log("/getBranchById");
  res.status(200).send(getBranchById());
});

app.get("/expenseVoucher/:id", function (req, res) {
  console.log("/expenseVoucherById");
  res.status(200).send(getInvoiceById());
});

app.get("/taxgroups/GST/tax-rates", function (req, res) {
  console.log("/taxRates of GST");
  res.status(200).send(getTaxRatesFromTaxGroup());
});

app.get("/taxgroups/VAT/tax-rates", function (req, res) {
  console.log("/taxRates of VAT");
  res.status(200).send(getVatTaxRates());
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

app.get("/presets/paymentModes", function (req, res) {
  console.log("/presets/paymentModes");
  res.status(200).send(getPaymentmodes());
});

app.get("/presets/transactiontypes", function (req, res) {
  console.log("/transcationTypes");
  res.status(200).send(getTranscationTypes());
});

app.get("/presets/chequestocks/:id", function (req, res) {
  console.log("/chequeStock");
  res.status(200).send(getChequeStock());
});

app.get("/remarks", function (req, res) {
  console.log("/remarks..");
  res.status(200).send(getRemarks());
});

app.post("/purchase/due-date", function (req, res) {
  console.log(req.data);
  res.status(200).send("2020-10-04T06:19:17.923");
});

app.post("/expenseVoucher/tax-heads", function (req, res) {
  console.log("/taxheads", req.body);
  if (req.body.placeOfSupplyId === 27) {
    res.status(201).send(postTaxHeads());
  } else {
    res.status(201).send({
      taxHeads: [
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
        //   lineItemId: 0,
        //   id: 0,
        //   taxAmount: 0.0,
        //   code: "GST_ZEROED",
        //   taxRatePart: 0.0,
        //   taxType: null,
        //   applicableOn: null,
        //   isActive: true,
        // },
        // {
        //   invoiceId: 0,
        //   lineItemId: 0,
        //   id: 0,
        //   taxAmount: 0.0,
        //   code: "CESS",
        //   taxRatePart: 100.0,
        //   taxType: null,
        //   applicableOn: null,
        //   isActive: true,
        // },
      ],
      isTaxExempted: false,
    });
  }
});

app.post("/purchase/approval-required", function (req, res) {
  console.log("/purchase/approval-required ");
  res.status(201).send(false);
});

app.get("/expenseVoucher", function (req, res) {
  console.log("/expenseVoucher");
  res.status(200).send(getExpenseVouchers());
});

app.delete("/expenseVoucher/:id", function (req, res) {
  console.log("voucher deleted");
  res.status(200).send("success");
});

// purchase/approval
app.post("/purchase/approval", function (req, res) {
  console.log("/purchase/approval-required ");
  res.status(201).send(true);
});

app.post("/expenseVoucher", function (req, res) {
  console.log("/expenseVoucher  => post request");
  // console.log(req.body.pl);
  // if(req.body.placeOfSupply.name === "maharashtra")
  res.status(201).send({ id: 1 });
});

app.get("/companies/country-code", function (req, res) {
  console.log("/getcountryCode");
  res.status(200).send("IN");
});

app.get("/companies/currency-code", function (req, res) {
  console.log("/getcurrencyCode");
  res.status(200).send("INR");
});

app.get("/countries/IN/tax-groups", function (req, res) {
  console.log("getTaxGroups");
  res.status(200).send([
    { code: "GST", name: "GST" },
    { code: "VAT", name: "VAT" },
    // { code: "GST1", name: "GST1" },
    // { code: "VAT1", name: "VAT1" },
  ]);
});

app.get("/general-ledgers/:id/number-series", function (req, res) {
  res.status(200).send(getNumberSeries());
});

app.listen(6003, () => {
  console.log("Server started at 6003 voucher");
});
