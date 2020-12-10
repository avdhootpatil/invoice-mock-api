module.exports = () => {
  return [
    {
      id: 1,
      salesPerson: "daniel",
      gstin: "SJHDG68778",
      transactionType: { id: 1, code: "B2B", name: "Registered" },
      stateCode: "MH",
      branchName: "pune",
    },
    {
      id: 2,
      salesPerson: "Charles",
      gstin: "SJHDG68778",
      transactionType: { id: 2, code: "SEZ", name: "special economic zone" },
      stateCode: "GJ",
      branchName: "mumbai",
    },
    {
      id: 3,
      salesPerson: "micahel",
      gstin: "SJHDG68778",
      transactionType: { id: 2, code: "EXP", name: "Exports" },
      stateCode: "UP",
      branchName: "nashik",
    },
    {
      id: 4,
      branchName: "Delhi",
      salesPerson: null,
      transactionType: { id: 1, code: "B2B", name: "Registered" },
      gstin: null,
      stateCode: "MH",
    },
  ];
};
