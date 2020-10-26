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

app.get("/organisations/:id", function (req, res) {
  console.log("/organisation");
  res.status(200).send(getOrganisationData());
});

app.get("/countries", function (req, res) {
  console.log("/countries");
  res.status(200).send(getCountries());
});

app.get("/states", function (req, res) {
  console.log("/states");
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

app.put("/organisations/:id", function (req, res) {
  console.log("name,alias updated");
  res.status(200).send("success");
});

app.post("/organisations", function (req, res) {
  console.log("organization saved");
  console.log(req.body);
  res.status(200).send({ id: 1, branch: [{ id: 1 }] });
});

app.post("/organisations/:id/accountInfo", function (req, res) {
  console.log("accountinfo saved");
  res.status(200).send({ id: 1 });
});

app.put("/organisations/:id/accountInfo", function (req, res) {
  console.log("accountinfo saved");
  res.status(200).send("success");
});

app.post("/organisations/:id/bankDetails", function (req, res) {
  console.log("bankDetails saved");
  res.status(200).send({ id: 1 });
});

app.put("/organisations/:id/bankDetails/:id", function (req, res) {
  console.log("bankDetails updated");
  res.status(200).send("success");
});

app.post("/organisations/:id/bankDetails/:id/setasdefault", function (
  req,
  res
) {
  console.log("bankDetails is default");
  res.status(200).send("success");
});

app.delete("/organisations/:id/bankDetails/:id", function (req, res) {
  console.log("bankDetails deleted");
  res.status(200).send("success");
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
  res.status(200).send({ id: 1 });
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
  res.status(200).send({ id: 1 });
});

app.put("/organisations/:id/kyc", function (req, res) {
  console.log("kyc updated");
  res.status(200).send("success");
});

app.post("/organisations/:id/branches", function (req, res) {
  console.log("branch saved");
  res.status(200).send({ id: 1 });
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

app.listen(6001, () => {
  console.log("Server started at 6001");
});
