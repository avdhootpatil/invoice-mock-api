module.exports = () => {
  // return {
  //   customer: null,
  //   invoiceNo: null,
  //   customerBranch: null,
  //   invoiceDate: "2020-09-08T06:30:01.851Z",
  //   dueDate: "2020-09-08T06:30:01.851Z",
  //   currency: null,
  //   gstin: null,
  //   exchangeRate: null,
  //   job: null,
  //   salesPerson: null,
  //   placeOfSupply: null,
  //   txnType: null,
  //   remarks: null,
  //   invoiceAmount: 0.0,
  //   invoiceTaxableAmount: 0.0,
  //   totalCESS: 0.0,
  //   totalCGST: 0.0,
  //   totalSGST: 0.0,
  //   totalIGST: 0.0,
  //   hasLUT: null,
  //   lineItems: [
  //     {
  //       goodsAndService: null,
  //       costCenter: null,
  //       description: null,
  //       taxCategoryCode: 0,
  //       abatement: 0.0,
  //       rcm: 0,
  //       qty: 0,
  //       uom: null,
  //       rate: 0.0,
  //       amount: 0.0,
  //       taxRate: 0.0,
  //       cessRate: 0.0,
  //       taxRateCode: null,
  //       taxAmount: 0.0,
  //       totalAmount: 0.0,
  //       discount: 0.0,
  //     },
  //   ],
  // };

  return {
    id:1,
    customer: {
      id: 1,
      name: "Soft Pvt. Limited",
    },
    customerBranch: {
      id: 1,
      name: "Delhi",
      salesPerson: "Samson",
      transactionType: { id: 1, code: "B2B", name: "Registered" },
      gstin: null,
      stateCode: null,
    },
    "purchaseRefNo": "1",
    "purchaseRefDate": "2020-11-09T00:00:00",
    "vendorBillNo": "2",
    "vendorBillDate": "2020-10-16T00:00:00",
    "dueDate": "2020-10-16T00:00:00",
    "currency": {
      "id": 241,
      "code": "INR",
      "name": null,
      "currencyCode": null
  },

    // dueDate: "2020-10-02T00:00:00",
    // invoiceDate: "2020-10-04T06:19:17.923",
    // dueDate: "2020-10-04T06:19:17.923",
    // currency: { code: "INR", id: 241 },
    exchangeRate: 1,

    placeOfSupply: {
      id: 0,
      name: "ARUNACHAL PRADESH ",
      censusCode: 12,
      gstStateName: "12-ARUNACHALPRADESH",
      unecStateCode: "AR",
    },
    job: {
      // id: 1,
      // number: "MUM/001/2020",
      id: 1,
      number: "A123G",
      orgName: "sketch ko"
    },
    salesPerson: null,
    // "isRounding": true,
    // "roundingAmount": 573.65,

    hasLUT: "NO",
    // amount: 574.0,
    isRounding:false,
    amount: 67,
    roundingAmount:66.94,
    taxableAmount: 58,
    remarks: "Terms and Conditions",
    totalCESS: 0.94,
    totalCGST: 4.57,
    totalSGST: 4.57,
    totalIGST: 0,
    totalUTGST: 0,
    "totalWHTaxAmount": 1.16,
    lineItems: [
      {
        goodsAndService: {
          id: 1,
          name: "Product",
        },
        "generalLedger": {
          code: "ED00000343",
          group: "P",
          id: 5364,
          name: "Test Shreyank-E",
          type: "A"
      },
        description: "Product Names",
        taxCategory: {
          code: 997214,
          id: 997214,
          name: "Trade services of time-share properties"
        },
        abatement: 2,
        rcm: 10,
        costCenter: {
          id: 2,
          name: "Air Import"
        },
        quantity: 1,
        rate: 50,
        amount: 50,
        discount: 2,
        taxRate: {
          name: "GST18",
          rate: 18
        },
        cessRate: 2,
        // taxRateCode: "GST18",
        taxAmount: 9.408,
        totalAmount: 56.45,
        "uom": "BAL",
      },
      {
        goodsAndService: null,
        generalLedger:{
          code: "ED00000343",
          group: "P",
          id: 5364,
          name: "Test Shreyank-E",
          type: "A"
        },
        description: "Product NamesGL",
        taxCategory: null,
        abatement: 0,
        rcm: 0,
        costCenter: null,
        quantity: 0,
        rate: 0,
        amount: 10,
        discount: 0,
        taxRate: {
          isActive: true,
          name: "GST5",
          rate: 5,
          validFrom: "0001-01-01T00:00:00"
        },
        cessRate: 0,
        // taxRateCode: "GST18",
        taxAmount: 0.5,
        totalAmount: 10.5,
      },
    ],
    attachments : [
      {name : "file1.pdf", url : "blob:http://localhost:4000/f0293c8e-c151-47fd-b22b-b180483608df", id:1, purchaseId:12 },
      {name : "image.jpg", url : "blob:http://localhost:4000/808ffc25-71cb-4b1f-852c-a8170d75f03f", id:2, purchaseId:12 }
    ],
    "whTax": {
      "name":"94C",
      "code": "94C",
      "purchaseID": 37,
      "srNo": 1,
      "taxID": 2,
      "taxPerc": 4.000,
      "taxAmount": 20.12800,
      "taxableAmount": 503.20
  }
  };
};


