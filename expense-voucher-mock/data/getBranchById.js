module.exports = () => {
  return {
    companyId: 0,
    organisationId: 0,
    id: 1,
    branchName: "mumbai",
    address: {
      addressLine1: "100T4 , Times Square",
      addressLine2: "Andheri (E)",
      addressLine3: null,
      country: {
        // alpha3Code: null,
        currencyName: "Indian Rupee",
        id: "IN",
        language: "",
        name: "India",
      },
      state: {
        censusCode: "91",
        gstStateName: "27-MAHARASHTRA",
        id: 1,
        name: "maharashtra",
        unecStateCode: "MH",
      },
      city: {
        id: 1,
        name: "Mumbai",
      },
      pinCode: "400705",
    },
    email: null,
    website: null,
    salesPerson: {
      id: 0,
      name: null,
    },
    collectionExecutive: {
      id: 0,
      name: null,
    },
    transactionType: {
      code: "B2B",
      id: 1,
      name: "Registered",
      // name: "Deemed Export ",
    },
    isDefault: false,
  };
};

// gstin: "27AAACI112114Z"
// id: 1
// name: "mumbai"
// salesPerson: null
// stateCode: "MH"
// transactionType: {id: 1, code: "B2B", name: "Registered"}
// code: "B2B"
// id: 1
// name: "Registered"
