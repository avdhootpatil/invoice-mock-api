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
const getTemplates = require("./data/getTemplates");
const getloadCoaTree = require("./data/getloadCoaTree");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/chartofaccounts", function (req, res) {
  console.log(req.query.parentId);
  console.log("/getAssets");
  if (req.query.parentId === "1") {
    console.log("1");
    res.status(200).send([
      {
        id: 5602,
        code: "AA00000004",
        aliasUC: "",
        parentId: 5601,
        name: "AS-GP-01",
        primaryType: "A",
        type: "H",
        glGroup: "O",
        isGlobal: true,
        isSysDefined: false,
        treeLevel: 2,
        glOrder: 0,
        linkedWith: 0,
        jobNoMandatory: false,
        isCtrlAcc: false,
        isFixedCurr: false,
        parentNodes: "Assets/AS-GP/AS-GP-01",
        location: { id: 0, name: "All Locations" },
        currency: { id: 0, code: null, name: null, currencyCode: "INR" },
        isNewGroupVisible: true,
        isNewCLVisible: true,
        isNewGLVisible: true,
        isEditVisible: false,
        isDeleteVisible: false,
      },
      {
        id: 5606,
        code: "AA00000007",
        aliasUC: "",
        parentId: 5601,
        name: "AS-GP-LR",
        primaryType: "A",
        type: "L",
        glGroup: "O",
        isGlobal: true,
        isSysDefined: false,
        treeLevel: 2,
        glOrder: 0,
        linkedWith: 0,
        jobNoMandatory: false,
        isCtrlAcc: true,
        isFixedCurr: false,
        parentNodes: "Assets/AS-GP/AS-GP-LR",
        location: { id: 0, name: "All Locations" },
        currency: { id: 0, code: null, name: null, currencyCode: "INR" },
        isNewGroupVisible: false,
        isNewCLVisible: false,
        isNewGLVisible: false,
        isEditVisible: false,
        isDeleteVisible: false,
      },
      {
        id: 5630,
        code: "AA00000008",
        aliasUC: "",
        parentId: 5601,
        name: "ASSET-CUS",
        primaryType: "A",
        type: "L",
        glGroup: "R",
        isGlobal: true,
        isSysDefined: false,
        treeLevel: 2,
        glOrder: 0,
        linkedWith: 0,
        jobNoMandatory: false,
        isCtrlAcc: true,
        isFixedCurr: false,
        parentNodes: "Assets/AS-GP/ASSET-CUS",
        location: { id: 0, name: "All Locations" },
        currency: { id: 0, code: null, name: null, currencyCode: "INR" },
        isNewGroupVisible: false,
        isNewCLVisible: false,
        isNewGLVisible: false,
        isEditVisible: false,
        isDeleteVisible: false,
      },
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
  } else if (req.query.parentId === "4") {
    console.log("4");
    res.status(200).send([
      {
        id: 23,
        code: "A000000260",
        aliasUC: null,
        parentId: 4,
        name: "Astrafour",
        primaryType: "A",
        // type: "H",
        type: "A",
        glGroup: "O",
        glOrder: 11,
        isGlobal: true,
        isSysDefined: false,
        treeLevel: 1,
        locationId: 0,
        linkedWith: 0,
        jobNoMandatory: false,
        isCtrlAcc: false,
        isFixedCurr: true,
        currency: {
          id: 241,
          code: null,
          name: "Indian Rupee",
          currencyCode: "INR",
        },
        location: {
          id: 4,
          name: "Delhi",
        },
        isNewGroupVisible: true,
        isNewCLVisible: true,
        isNewGLVisible: true,
        isEditVisible: true,
        isDeleteVisible: true,
        parentNodes: "AIRCRAFT - INCOME >> LKJH cd",
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

app.get("/companies/currency-code", function (req, res) {
  console.log("/home-currency");
  res.status(200).send("SGD");
});

app.get("/chartofaccounts/template", function (req, res) {
  console.log("/templates");
  res.status(200).send(getTemplates());
});

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

app.get("/chartofaccounts/load-default-coa", function (req, res) {
  console.log("/load-default-coa");
  res.status(200).send(getloadCoaTree());
});

app.get("/chartofaccounts/generatecode", function (req, res) {
  console.log("/generatecode");
  res.status(200).send("abc123");
});

app.get("/chartofaccounts/show-load-coa", function (req, res) {
  console.log("/showloadcoa");
  res.status(200).send({
    showLoadCOA: true,
  });
});

app.post("/general-ledger", function (req, res) {
  console.log("/post-data");
  // res.status(200).send({ id: 1, message: "test" });
  res.status(400).send({
    message: "Account Cannot be deleted. Since it is already transacted",
  });
});

app.delete("/general-ledger", function (req, res) {
  console.log("/delete-gl");
  // res.status(400).send({
  //   message: "Account Cannot be deleted. Since it is already transacted",
  // });
  // res.status(500).send({
  //   message: "Account Cannot be deleted. Since it is already transacted",
  // });

  res.status(404).send();
});

app.post("/chartofaccounts/save-default-coa", function (req, res) {
  console.log("/save-default-coa");
  res.status(200).send();
});

app.delete("/chartofaccounts", function (req, res) {
  console.log("node deleted");
  res.status(200).send("success");
});

app.listen(6001, () => {
  console.log("Server started at 6001");
});
