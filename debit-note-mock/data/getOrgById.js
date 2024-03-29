module.exports = () => {
  return {
    companyId: 3,
    id: 2140,
    name: "Zorro Inc",
    alias: "Zorro Inc.",
    deletedOn: null,
    branches: [
      {
        companyId: 3,
        organisationId: 2140,
        id: 2219,
        branchName: "Mumbai",
        address: {
          addressLine1: "Four Bungalows",
          addressLine2: "Andheri west",
          addressLine3: "",
          country: {
            id: "IN",
            name: "India",
            currencyName: null,
            language: null,
            alpha3Code: null,
          },
          state: {
            id: 1,
            name: "Maharashtra",
            censusCode: 12,
            gstStateName: "27-Maharashtra",
            unecStateCode: "MH",
          },
          city: "Mumbai",
          pinCode: "400053",
        },
        email: "",
        website: "",
        isDefault: true,
        deletedOn: null,
        gstin: "ABCSAS13",
        transactionType: {
          id: 1,
          code: "B2B",
          name: "Resigstred",
        },
        salesPerson: { id: 36, name: "pravin" },
        collectionExecutive: {
          id: 36,
          name: "pravin",
        },
      },
    ],
    contactPersons: [
      {
        companyId: 3,
        organisationId: 2140,
        id: 414,
        name: "Avdhoot Patil",
        designation: "CEO",
        department: "Company",
        phoneNumber: "02226363147",
        mobileNo: "9863325415",
        email: "a.patil@zorro.com",
        isDefault: false,
        deletedOn: null,
      },
    ],
    accountInfo: {
      companyId: 3,
      organisationId: 2140,
      id: 1208,
      creditLimit: 0.0,
      creditOnHold: 0.0,
      isCreditLimitUnlimited: true,
      isCreditLimitOnHoldUnlimited: true,
      customerGL: {
        id: 10536,
        name: "Zorro Inc - C",
      },
      vendorGL: {
        id: 10537,
        name: "Zorro Inc - V",
      },
      customerGLCurrency: {
        id: 337,
        code: "USD",
        name: "Indian Rupee",
      },
      vendorGLCurrency: {
        id: 241,
        code: "USD",
        name: "Indian Rupee",
      },
      organisationType: "",
      receivableCreditPeriodInDays: 30,
      payableCreditPeriodInDays: 0,
      fiscalYear: {
        id: 108,
        startDate: "0001-01-01T00:00:00",
        endDate: "0001-01-01T00:00:00",
        displayDate: "Jan  1 2020 12:00AM - Mar 31 2021 12:00AM",
        remarks: null,
      },
      whTaxReceivable: {
        id: 34,
        name: "TDSR",
      },
      whTaxPayable: {
        id: 1,
        name: "TDSA",
      },
      whTaxReceivableRate: 1000.0,
      whTaxPayableRate: 10.0,
      taxExemption: {
        certificateNo: "Jgjj84dasdadasd",
        reducedRate: 0.0,
        exemptionLimit: 500.0,
        isExemptionLimitUnlimted: false,
        validFrom: "2021-01-19T11:27:06.303",
        validTo: "2021-08-31T11:27:06",
      },
      bankDetails: [
        {
          organisationId: 2140,
          id: 1008,
          name: "HDFC",
          branch: "Four Bungalows",
          accountNo: "114006658",
          ifsc: "FO550",
          swiftCode: "Aswfe",
          payeeName: "Zorro Inc",
          isDefault: true,
          deletedOn: null,
        },
      ],
    },
    registrationDetails: [
      {
        organisationId: 2140,
        branch: {
          id: 2219,
          branchName: "Mumbai",
        },
        id: 110,
        type: {
          id: 6,
          name: "PAN NO",
        },
        registrationNo: "45255PK8Z",
        validFrom: "2021-01-19T11:30:52.847",
        validTo: "2021-02-05T11:30:52",
        isDefault: false,
        deletedOn: null,
      },
    ],
    kycDetails: {
      organisationId: 2140,
      id: 405,
      address: {
        "​addressLine1": "Four bungalows",
        addressLine2: "Andheri west",
        addressLine3: "Andheri west",
        country: {
          id: "IN",
          name: "India",
          currencyName: null,
          language: null,
          alpha3Code: null,
        },
        state: {
          "​id": 19,
          name: "Maharashtra",
          censusCode: 0,
          gstStateName: null,
          unecStateCode: null,
        },
        city: "Mumbai",
        pinCode: "400053",
      },
      email: "",
      website: "",
      phoneNumber: "",
      faxNumber: "",
      contactPersonName: "avdhoot Patil",
      contactPersonDesignation: "",
      contactPersonPhoneNumber: "",
      contactPersonMobileNo: "",
      contactPersonEmail: "",
    },
    attachments: [],
  };
};
