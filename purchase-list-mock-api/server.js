var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var getPurchaseList = require("./data/getPurchaseList");
const getOrganisations = require("./data/getOrganizations");

app.get("/organisations", function (req, res) {
  console.log("/organizations");
  res.status(200).send(getOrganisations());
});

app.get("/purchase", function (req, res) {
  console.log("/purchase");
  res.status(200).send(getPurchaseList());
});

app.delete("/purchase/:id", function (req, res) {
  console.log("purchase deleted");
  res.status(200).send("success");
});

app.listen(6005, () => {
  console.log("Server started at 6005");
});
