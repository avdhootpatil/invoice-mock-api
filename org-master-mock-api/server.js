var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var getOrganisationData = require("./data/getOrganisationData");
var getCountries = require("./data/getCountries");
var getStates = require("./data/getStates");
var getCities = require("./data/getCities");
var getEmployees = require("./data/getEmployees");
var getFiscalYears = require("./data/getFiscalYears");
var getGeneralLedgers = require("./data/getGeneralLedgers");
var getTransactionTypes = require("./data/getTransactionTypes");
var getWhTaxCodes = require("./data/getWhTaxCodes");
var getRegistrationTypes = require("./data/getRegistrationTypes");
var getDocumentTypes = require("./data/getDocumentTypes");
var getCurrencies = require("./data/getCurrencies");
var getGlGroups = require("./data/getGlGroups");

app.get("/organisations/:id", function (req, res) {
  console.log("/organisation");
  res.status(200).send(getOrganisationData());
});

app.get("/countries", function (req, res) {
  console.log("/countries");
  res.status(200).send(getCountries());
});

app.get("/countries/:id/states", function (req, res) {
  console.log("/statesbycountryId");
  res.status(200).send(getStates());
});

app.get("/cities", function (req, res) {
  console.log("/cities");
  res.status(200).send(getCities());
});

app.get("/employees", function (req, res) {
  console.log("/employees");
  res.status(200).send(getEmployees());
});

app.get("/fiscalyears", function (req, res) {
  console.log("/fiscalyears");
  res.status(200).send(getFiscalYears());
});

app.get("/currencies", function (req, res) {
  console.log("/currencies");
  res.status(200).send(getCurrencies());
});

app.get("/general-ledgers", function (req, res) {
  console.log("/general-ledgers");
  res.status(200).send(getGeneralLedgers());
});

app.get("/companies/currency-code", function (req, res) {
  console.log("/currency-code");
  res.status(200).send("DHR");
});

app.get("/companies/country-code", function (req, res) {
  console.log("/country-code");
  res.status(200).send("IN");
});

app.get("/is-gl-transacted", function (req, res) {
  console.log("/transacted");
  res.status(200).send({
    isCustomerTransacted: false,
    isVendorTransacted: false,
  });
});

app.get("/countries/:id/transaction-types", function (req, res) {
  console.log("/transactiontypes");
  res.status(200).send(getTransactionTypes());
});

app.get("/registrationtypes", function (req, res) {
  console.log("/registrationtypes");
  res.status(200).send(getRegistrationTypes());
});

app.get("/whtaxcodes", function (req, res) {
  console.log("/whtaxcodes");
  res.status(200).send(getWhTaxCodes());
});

app.get("/organisations/:isCustomer/general-ledger-group", function (req, res) {
  console.log("/getGlGroups");
  res.status(200).send(getGlGroups());
});

app.get("/documenttypes", function (req, res) {
  console.log("/documenttypes");
  res.status(200).send(getDocumentTypes());
});

app.put("/organisations/:id", function (req, res) {
  console.log("name,alias updated");
  res.status(200).send("success");
});

app.post("/organisations", function (req, res) {
  console.log("organization saved");
  console.log(req.body);
  // res.status(400).send({
  //   message: "The request is invalid.",
  //   modelState: {
  //     "model.Name": ["name is requierd"],

  //     "model.Branches[0].AddressLine1": ["The AddressLine1 field is required."],
  //     "model.Branches[0].Country": ["The Country field is required."],
  //     "model.Branches[0].City": ["The City field is required."],
  //   },
  // });
  // res.status(500).send({});
  res.status(201).send({ id: 1, branches: [{ id: 1, name: "xyz" }] });
});

app.post("/organisations/:id/accountInfo", function (req, res) {
  console.log("accountinfo saved");
  res.status(200).send({ id: 1 });
});

app.post("/create-general-ledger", function (req, res) {
  console.log("general ledger created");
  res.status(200).send({ customerGlId: 2, vendorGlId: 0 });
});

app.put("/organisations/:id/accountInfo", function (req, res) {
  console.log("accountinfo saved");
  res.status(200).send("success");
});

app.post("/organisations/:id/banks", function (req, res) {
  console.log("banks saved");
  res.status(200).send({ id: 1 });
});

app.put("/organisations/:id/banks/:id", function (req, res) {
  console.log("banks updated");
  res.status(200).send("success");
});

app.post("/organisations/:id/banks/:id/setasdefault", function (req, res) {
  console.log("banks is default");
  res.status(200).send("success");
});

app.delete("/organisations/:id/banks/:id", function (req, res) {
  console.log("banks deleted");
  res.status(200).send("success");
});

app.get("/companies/currency-code", function (req, res) {
  console.log("/home-currency");
  res.status(200).send("SGD");
});

app.post("/organisations/:id/contactPersons", function (req, res) {
  console.log("contactPerson saved");
  res.status(200).send({ id: 1 });
});

app.put("/organisations/:id/contactPersons/:id", function (req, res) {
  console.log("contactPerson updated");
  res.status(200).send("success");
});

app.delete("/organisations/:id/contactPersons/:id", function (req, res) {
  console.log("contactPerson deleted");
  res.status(200).send("success");
});

app.post("/organisations/:id/branchRegistration", function (req, res) {
  console.log("branchRegistration saved");
  // res.status(200).send({ id: 1 });
  res.status(400).send({
    modelState: {
      branch: [
        "The Selected registration type already exists for the given branch",
      ],
    },
  });
  // res.status(500).send("error");
});

app.put("/organisations/:id/branchRegistration/:id", function (req, res) {
  console.log("branchRegistration updated");
  res.status(200).send("success");
});

app.delete("/organisations/:id/branchRegistration/:id", function (req, res) {
  console.log("branchRegistration deleted");
  res.status(200).send("success");
});

app.post("/organisations/:id/kyc", function (req, res) {
  console.log("kyc saved");
  // res.status(200).send({ id: 1 });
  // res.status(500).send();
  res.status(400).send({
    message: "invalid",
    modelState: {
      "model.Branches[0].AddressLine1": ["The AddressLine1 field is required."],
      "model.Branches[0].Country": ["The Country field is required."],
      "model.Branches[0].City": ["The City field is required."],
    },
  });
});

app.put("/organisations/:id/kyc", function (req, res) {
  console.log("kyc updated");
  // res.status(200).send("success");
  res.status(500).send();
});

app.post("/organisations/:id/branches", function (req, res) {
  console.log("branch saved");
  // res.status(200).send({ id: 1 });
  res.status(400).send({
    message: "invalid",
    modelState: {
      "model.Branches[0].BranchName": ["The Branch name field is required."],
      "model.Branches[0].AddressLine1": ["The AddressLine1 field is required."],
      "model.Branches[0].Country": ["The Country field is required."],
      "model.Branches[0].City": ["The City field is required."],
    },
  });
  // res.status(500).send();
});

app.put("/organisations/:id/branches/:id", function (req, res) {
  console.log("branch updated");
  res.status(200).send("success");
});

app.post("/organisations/:id/branches/:id/setasdefault", function (req, res) {
  console.log("branch updated");
  res.status(200).send("success");
});

app.delete("/organisations/:id/branches/:id", function (req, res) {
  console.log("branch deleted");
  res.status(200).send("success");
});

app.post("/organisations/:id/attachments", function (req, res) {
  console.log("document saved");
  res.status(200).send({
    id: 1,
    url: "https://www.google.com/search?q=pdf+logo&sxsrf=ALeKk010pU-4eYCPdojDIWELFSNb8ShAyw:1604408161319&tbm=isch&source=iu&ictx=1&fir=1ELdRA6RsQC3lM%252CL_BnzsMbORazMM%252C_&vet=1&usg=AI4_-kRZ5llGXVsncbuBF_jEdC0LcFojuQ&sa=X&ved=2ahUKEwj-w56UtubsAhWVheYKHWKYC0AQ9QF6BAgKEFc&biw=968&bih=696#imgrc=1ELdRA6RsQC3lM",
    name: "AOA",
  });
});

app.put("/organisations/:id/attachments/:id", function (req, res) {
  console.log("document updated");
  res.status(200).send("success");
});

app.delete("/organisations/:id/attachments/:id", function (req, res) {
  console.log("document deleted");
  res.status(200).send("success");
});

app.listen(6003, () => {
  console.log("Server started at 6003");
});
