module.exports = () => {
  return [
    {
      id: 1,
      salesPerson: "daniel",
      gstin: "SJHDG68778",
      transactionType: { id: 1, code: "B2B", name: "Registered" },
      stateCode: "MH",
      name: "pune",
    },
    {
      id: 2,
      salesPerson: "Charles",
      gstin: "SJHDG68778",
      transactionType: { id: 2, code: "SEZ", name: "special economic zone" },
      stateCode: "GJ",
      name: "mumbai",
    },
    {
      id: 3,
      salesPerson: "micahel",
      gstin: "SJHDG68778",
      transactionType: { id: 2, code: "EXP", name: "Exports" },
      stateCode: "UP",
      name: "nashik",
    },
    {
      id: 4,
      name: "Delhi",
      salesPerson: null,
      transactionType: { id: 1, code: "B2B", name: "Registered" },
      gstin: null,
      stateCode: "MH",
    },
  ];
};
