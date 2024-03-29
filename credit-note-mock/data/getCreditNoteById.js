module.exports = () => {
  return {
    id: 23,
    customer: {
      id: 2140,
      name: "Zorro Inc",
    },
    customerBranch: {
      id: 2219,
      branchName: "Mumbai",
      transactionType: null,
      gstin: null,
      stateCode: null,
    },
    numberSeries: "0/0/CN/7/Aug/21-22",
    creditNoteDate: "2021-08-13T00:00:00",
    invoiceReferenceId: 5091,
    invoiceReferenceNo: "000028",
    currency: {
      id: 241,
      code: "INR",
      name: "Indian Rupee",
      currencyCode: null,
    },
    exchangeRate: 1.0,
    jobNumber: null,
    salesPerson: {
      id: 18,
      name: "Roshan",
    },
    transactionType: {
      id: 1,
      name: "Registered",
      code: "B2B",
    },
    taxGroup: "GST",
    remarks: "Good",
    placeOfSupply: {
      id: 27,
      name: "Maharashtra",
      censusCode: 27,
      gstStateName: "27-Maharashtra",
      unecStateCode: "MH",
      isut: false,
    },
    isOverseas: false,
    hasLUT: "NO",
    isDraft: false,
    isRounding: false,
    roundingAmount: 0.0,
    taxableAmountFC: 200.0,
    totalAmountFC: 200.0,
    totalIGST: 0.0,
    totalSGST: 0.0,
    totalCGST: 0.0,
    totalUTGST: 0.0,
    totalCESS: 0.0,
    totalVAT: 0.0,
    lineItems: [
      {
        id: 39,
        goodsService: {
          id: 16,
          name: "Fish Nets",
        },
        costCenter: null,
        quantity: 0.0,
        rate: 0.0,
        uom: "PC",
        description: null,
        amountFC: 200.0,
        discountFC: 0.0,
        taxRate: {
          name: "GST5",
          rate: 5.0,
        },
        hsCode: null,
        abatement: 0.0,
        rcm: 0.0,
        reversalType: 1,
        cessRate: 0.0,
        cessAmount: 0.0,
        taxableAmountFC: 200.0,
        taxAmountFC: 0.0,
        totalAmountFC: 200.0,
        taxBifurcations: [],
      },
    ],
    attachments: [],
  };
};
