var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

var getOrganizations = require("./data/getOrganizations");
var getCostCenters = require("./data/getCostCenter");
var getRemarks = require("./data/getRemarks");
var getCountries = require("./data/getCountries");
var getStates = require("./data/getStates");
var getBranchById = require("./data/getBranchById");
var getBranches = require("./data/getBranches");
var getJobs = require("./data/getJobs");
var getPurchaseById = require("./data/getPurchaseById");
var getCurrencies = require("./data/getCurrencies");
var getGoodsAndServices = require("./data/getGoodsAndServices");
var getGoodsAndServicesById = require("./data/getGoodsAndServicesById");
var postTaxHeads = require("./data/postTaxHeads");
var getTaxRatesFromTaxGroup = require("./data/getTaxRatesFromTaxGroup");
var getGeneralLedgers = require("./data/getGeneralLedgers");
var getTaxCategories = require("./data/getTaxCategories");
const getwhTaxes = require("./data/getWhTaxes");
const getPurchases = require("./data/getPurchases");
const getOrgById = require("./data/getOrgById");
const getSalesPersons = require("./data/getSalesPersons");
const getCreditNoteById = require("./data/getCreditNoteById");
const getCreditNotes = require("./data/getCreditNotes");
const getAnnexures = require("./data/getAnnexures");
var getChargesByJobId = require("./data/getChargesById");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/organisations", function (req, res) {
  console.log("/organizations");
  res.status(200).send(getOrganizations());
});

app.get("/invoice/presets", function (req, res) {
  console.log("/invoice presets");
  res.status(200).send(getInvoicePresets());
});

app.get("/jobs/:id/charges", function (req, res) {
  res.status(200).send(getChargesByJobId());
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

app.get("/debit-note/:id", function (req, res) {
  console.log("/getCreditNoteById");
  res.status(200).send(getCreditNoteById());
});

app.get("/debit-notes/numbering-setup", function (req, res) {
  console.log("/organisation/:id");
  res
    .status(200)
    .send({ number: 1, prefix: "Jun", suffix: "/21-22", seriesId: 1 });
});

app.get("/countries/:id/tax-groups", (req, res) => {
  console.log("tacxGroups");
  res.status(200).send([
    {
      code: "GST",
      name: "GST",
    },
    {
      code: "VAT",
      name: "VAT",
    },
  ]);
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

app.get("/presets/annexures", function (req, res) {
  console.log("/wh-taxes");
  res.status(200).send(getAnnexures());
});

app.post("/purchase/due-date", function (req, res) {
  console.log("req.data");
  res.status(200).send("2020-10-04T06:19:17.923");
});

app.get("/cost-centers", function (req, res) {
  console.log("cost-center");
  res.status(200).send(getCostCenters());
});

app.get("/remarks", function (req, res) {
  console.log("remarks");
  res.status(200).send(getRemarks());
});

app.get("/purchase/outstanding", function (req, res) {
  console.log("outstanding purchases");
  res.status(200).send(getPurchases());
});

app.get("/purchase/:id", function (req, res) {
  console.log("invoiceById");
  res.status(200).send(getPurchaseById());
});

app.get("/employees", function (req, res) {
  console.log("employees");
  res.status(200).send(getSalesPersons());
});

app.post("/debit-notes/tax-heads", function (req, res) {
  console.log("/taxheads", req.body);
  if (req.body.placeOfSupply?.name === "maharashtra") {
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
    ]);
  }
});

app.post("/debit-note", function (req, res) {
  console.log("/debit-note  => post request");
  // console.log(req.body.pl);
  // if(req.body.placeOfSupply.name === "maharashtra")
  res.status(201).send({ id: 1, series: "ABCE" });
});

app.put("/debit-note/:id", function (req, res) {
  console.log("/debit-note  => post request");
  // console.log(req.body.pl);
  // if(req.body.placeOfSupply.name === "maharashtra")
  res.status(201).send("OK");
});

app.get("/debit-note", function (req, res) {
  res.status(200).send(getCreditNotes());
});

app.get("/debit-notes", function (req, res) {
  res.status(200).send(getCreditNotes());
});

app.get("/companies/currency-code", function (req, res) {
  console.log("/currency-code");
  res.status(200).send("DHR");
});

app.get("/companies/country-code", function (req, res) {
  console.log("/country-code");
  res.status(200).send("IN");
});

app.get("/presets/validate-date-range", function (req, res) {
  // res.status(200).send();

  res.status(400).send({
    message: "The request is invalid",
    modelState: {
      dateCheck: ["Enter valid date"],
    },
  });
});

app.delete("/debit-note", function (req, res) {
  res.status(200).send("OK");
});

app.get("/organisations/:id", function (req, res) {
  console.log("/getOrganisationById");
  res.status(200).send(getOrgById());
});

app.listen(8003, () => {
  console.log("Server started at 8003");
});
