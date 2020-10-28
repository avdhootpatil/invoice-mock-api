var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var getInvoiceList = require("./data/getInvoiceList");

app.get("/invoice", function (req, res) {
  console.log("/invoices");
  res.status(200).send(getInvoiceList());
});

app.listen(6001, () => {
  console.log("Server started at 6001");
});
