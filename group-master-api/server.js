var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var getGrouMasterById = require("./data/getGrouMasterById");
var getGroupMasterList = require("./data/getGroupMasterList");

app.get("/goodsandservicesgroup/:id", function (req, res) {
  console.log("/invoices");
  res.status(200).send(getGrouMasterById());
});

app.get("/goodsandservicesgroup", function (req, res) {
  console.log("/list");
  res.status(200).send(getGroupMasterList());
});

app.post("/goodsandservicesgroup", function (req, res) {
  console.log("/post");
  res.status(200).send({ message: "posted" });
});

app.put("/goodsandservicesgroup/:id", function (req, res) {
  console.log("/put");
  res.status(200).send({ message: "updated" });
});

app.listen(6001, () => {
  console.log("Server started at 6001");
});
