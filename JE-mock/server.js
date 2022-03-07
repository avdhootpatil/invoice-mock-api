var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

const getCurrencies = require("./data/getCurrencies");
const getRemarks = require("./data/getRemarks");
const getCostCenters = require("./data/getCostCenters");
const getGeneralLedgers = require("./data/getGeneralLedgers");
const getWHTaxes = require("./data/getWHTaxes");
const getOrganisations = require("./data/getOrganizations");
const getCountries = require("./data/getCountries");
const getById = require("./data/getById");
const getJournalEntries = require("./data/getJournalEntries");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/api/organisations", function (req, res) {
  console.log("/organizations");
  res.status(200).send(getOrganisations());
});

app.get("/countries", function (req, res) {
  console.log("/countries");
  res.status(200).send(getCountries());
});

app.get("/currencies", function (req, res) {
  console.log("/currencies");
  res.status(200).send(getCurrencies());
});

app.get("/remarks", function (req, res) {
  console.log("/remarks..");
  res.status(200).send(getRemarks());
});

app.get("/cost-centers", function (req, res) {
  console.log("/costCenters");
  res.status(200).send(getCostCenters());
});

app.get("/general-ledgers", function (req, res) {
  console.log("/general-ledgers");
  res.status(200).send(getGeneralLedgers());
});

app.get("/general-ledgers/:id/wh-taxes", function (req, res) {
  console.log("/whTaxes");
  res.status(200).send(getWHTaxes());
});

app.post("/journal-entries", function (req, res) {
  console.log("/journal  => post request");
  // console.log(req.body.pl);
  // if(req.body.placeOfSupply.name === "maharashtra")
  res.status(201).send({ id: 1, journalNo: "M/JV/000002/07/21-22" });
});

app.get("/journal-entries/:id", function (req, res) {
  console.log("/journal");
  res.status(200).send(getById());
});

app.get("/journal-entries", function (req, res) {
  console.log("/journal-entries");
  res.status(200).send(getJournalEntries());
});

app.delete("/journal-entries/:id", function (req, res) {
  console.log("/journal-entries");
  res.status(200).send("deleted successfully.");
});

app.listen(6005, () => {
  console.log("Server started at 6005 journal entry mock");
});
