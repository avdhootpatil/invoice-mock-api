var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

var getGoodsAndServices = require("./data/getGoodsAndServices");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/goodsandservices", function (req, res) {
  console.log("/goodsandservices");
  res.status(200).send(getGoodsAndServices());
});

app.listen(6001, () => {
  console.log("Server started at 6001");
});
