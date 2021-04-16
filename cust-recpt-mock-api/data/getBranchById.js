module.exports = () => {
  return [
    {
      id: 1,
      salesPerson: null,
      gstin: "27AAACI112114Z",
      transactionType: { id: 1, code: "B2B", name: "Registered" },
      stateCode: "MH",
      branchName: "mumbai",
    },
    {
      id: 2,
      salesPerson: null,
      gstin: "27AAACI112114Z",
      transactionType: { id: 1, code: "B2B", name: "Registered" },
      stateCode: "DL",
      branchName: "Delhi",
    },
    {
      id: 3,
      salesPerson: "CHETAN PATEL",
      gstin: "27AAACI112114Z",
      transactionType: { id: 3, code: "B2C", name: "Unregistered" },
      stateCode: "MH",
      branchName: "Jinuha",
    },
    {
      id: 4,
      branchName: "Mumbai",
      salesPerson: null,
      transactionType: { id: 2, code: "B2B", name: "Composition" },
      gstin: "27AAACI112114Z",
      stateCode: "MH",
    },
    {
      id: 5,
      branchName: "New delhi",
      salesPerson: null,
      transactionType: { id: 2, code: "B2B", name: "Composition" },
      gstin: "27AAACI112114Z",
      stateCode: "MH",
    },
    {
      id: 6,
      branchName: "London",
      salesPerson: null,
      transactionType: { id: 2, code: "SEZ", name: "Special Economic Zone" },
      gstin: "27AAACI112114Z",
      stateCode: "MH",
    },
  ];
};
