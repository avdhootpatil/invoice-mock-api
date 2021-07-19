module.exports = () => {
  return {
    type: "G",
    code: "Pd",
    id: 1,
    name: "Product",
    unitsOfMeasurement: {
      id: 2,
      code: "BAL",
      description: "Bale",
      type: "Number",
    },
    goodsAndServicesGroup: {
      id: 2,
      name: "Electron",
    },
    taxGroup: {
      name: "GST",
      code: "GST",
    },
    taxCategory: {
      id: 997214,
      code: 997214,
      name: "Trade services of time-share properties",
      baseRate: 50,
    },
    taxRate: {
      name: "GST18",
      rate: 18,
    },
    costGL: {
      id: 5364,
      name: "Test Shreyank-E",
      code: "ED00000343",
      type: "A",
      group: "P",
    },
    incomeGL: {
      id: 0,
      name: null,
      code: null,
      type: null,
      group: null,
    },
    cpCurrency: {
      id: 241,
      code: "INR",
    },
    spCurrency: {
      id: 241,
      code: "INR",
    },
    salesPrice: 50,
    costPrice: 40,
    abatement: 0,
    cessRate: 2,
    amount: 0,
    taxAmount: 0,
    totalAmount: 0,
  };
};
