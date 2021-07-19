module.exports = () => {
  return {
    id: 34,
    type: "G",
    name: "test",
    code: "p1-123",
    chargeCategory: { id: 3, name: "Revenue" },
    unitsOfMeasurement: {
      id: 38,
      code: "LTR",
      description: "Litre",
      type: "Volume",
    },
    goodsAndServicesGroup: {
      id: 4,
      name: "Mobile ",
      description: "wwwwsssss",
      companyId: 0,
    },
    taxGroup: { name: "VAT", code: "VAT" },
    taxCategory: { id: 96, code: "VAT0001", name: "Value Added Tax" },
    taxRate: { name: "VAT12", rate: 12.0 },
    costGL: {
      id: 1718,
      name: "TEST 1234 - E",
      code: "ED00000152",
      type: "E",
      group: "O",
    },
    incomeGL: {
      id: 3902,
      name: "TEST CHARGE MASTER - I",
      code: "ID00000286",
      type: "I",
      group: "O",
    },
    costCurrency: { id: 241, code: "INR" },
    salesCurrency: { id: 241, code: "INR" },
    salesPrice: 10.0,
    costPrice: 100.0,
    abatement: 10.0,
    cessRate: 0.0,
  };
};
