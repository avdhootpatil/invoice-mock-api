var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

const getAssets = require("./data/getAssets");
const getFiscalPeriods = require("./data/getFiscalPeriods");
const getLocations = require("./data/getLocations");
const getVisibility = require("./data/getVisibility");
const getFixedCurrency = require("./data/getFixedCurrency");
const getSearchData = require("./data/getSearchData");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/chartofaccounts", function (req, res) {
  console.log(req.query.parentId);
  console.log("/getAssets");
  if (req.query.parentId === "1") {
    console.log("1");
    res.status(200).send([
      // {
      //   id: 121,
      //   code: "A000000450",
      //   parentId: 1,
      //   name: "MOTO-GP",
      //   primaryType: "A",
      //   aliasUC: "AS",
      //   // type: "H",
      //   type: "H",
      //   glGroup: "O",
      //   isGlobal: true,
      //   isSysDefined: false,
      //   treeLevel: 2,
      //   locationId: 0,
      //   linkedWith: 0,
      // },
      // {
      //   id: 122,
      //   code: "A000000450",
      //   parentId: 1,
      //   name: "BS_GP",
      //   primaryType: "A",
      //   aliasUC: "AS",
      //   // type: "H",
      //   type: "H",
      //   glGroup: "O",
      //   isGlobal: true,
      //   isSysDefined: false,
      //   treeLevel: 2,
      //   locationId: 0,
      //   linkedWith: 0,
      // },
    ]);
  } else if (req.query.parentId === "2") {
    console.log("2");
    res.status(200).send([
      {
        id: 221,
        code: "A000000450",
        parentId: 2,
        name: "DANIEL",
        primaryType: "A",
        aliasUC: "AS",
        // type: "H",
        type: "H",
        glGroup: "O",
        isGlobal: true,
        isSysDefined: false,
        treeLevel: 2,
        locationId: 0,
        linkedWith: 0,
      },
      {
        id: 222,
        code: "A000000450",
        parentId: 2,
        name: "CHARLES",
        primaryType: "A",
        aliasUC: "AS",
        // type: "H",
        type: "H",
        glGroup: "O",
        isGlobal: true,
        isSysDefined: false,
        treeLevel: 2,
        locationId: 0,
        linkedWith: 0,
      },
    ]);
  } else {
    console.log("3");
    res.status(200).send(getAssets());
  }
});

app.get("/chartofaccounts/location", function (req, res) {
  console.log("/locations");
  res.status(200).send(getLocations());
});

// app.get("/chartofaccounts/fiscalperiod", function (req, res) {
//   console.log("/fiscalperiod");
//   res.status(200).send(getFiscalPeriods());
// });

app.get("/fiscalyears", function (req, res) {
  console.log("/fiscalyears");
  res.status(200).send(getFiscalPeriods());
});

app.get("/chartofaccounts/generatecode", function (req, res) {
  console.log("/generatecode");
  res.status(200).send("12345");
});

app.get("/chartofaccounts/visibility", function (req, res) {
  console.log("/getVisibility");
  res.status(200).send(getVisibility());
});

app.get("/chartofaccounts/fixedcurrency", function (req, res) {
  console.log("/getfixedcurrency");
  res.status(200).send(getFixedCurrency());
});

app.get("/chartofaccounts/search", function (req, res) {
  console.log("/search");
  res.status(200).send(getSearchData());
});

app.post("/general-ledger", function (req, res) {
  console.log("/post-data");
  res.status(200).send({ id: 1, message: "test" });
});

app.get("/chartofaccounts/generatecode", function (req, res) {
  console.log("/generatecode");
  res.status(200).send("abc123");
});

app.delete("/chartofaccounts", function (req, res) {
  console.log("node deleted");
  res.status(200).send("success");
});

app.listen(6001, () => {
  console.log("Server started at 6001");
});
