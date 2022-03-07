module.exports = () => {
  return {
    id: 18,
    journalNo: "M/JV/000002/07/21-22",
    journalDate: "2021-07-22T00:00:00",
    currency: {
      id: 241,
      code: "INR",
      name: "Indian Rupee",
      currencyCode: null,
    },
    exchangeRate: 1.0,
    referenceNo: null,
    referenceDate: "0001-01-01T00:00:00",
    remarks: null,
    lineItems: [
      {
        generalLedger: {
          id: 275,
          name: "TDS Receivable 194H",
          code: null,
          type: null,
          group: null,
        },
        costCenter: {
          id: 0,
          name: null,
        },
        debitAmountFC: 100.0,
        creditAmountFC: 0.0,
        lineItemWHTax: {
          organisation: {
            id: 2140,
            name: "Zorro Inc",
          },
          taxId: 28,
          taxCode: "TR",
          taxRate: 2.0,
          name: "TDS Receivables",
          taxableAmountFC: 100.0,
        },
      },
      {
        generalLedger: {
          id: 1372,
          name: "TDS PAYABLE ACCOUNT",
          code: null,
          type: null,
          group: null,
        },
        costCenter: {
          id: 0,
          name: null,
        },
        debitAmountFC: 0.0,
        creditAmountFC: 100.0,
        lineItemWHTax: {
          organisation: {
            id: 2140,
            name: "Zorro Inc",
          },
          taxId: 44,
          taxCode: "TDSPA",
          taxRate: 5.0,
          name: "TDS PAYABLE ACCOUNT",
          taxableAmountFC: 100.0,
        },
      },
    ],
    journalAttachments: [],
  };

  // return {
  //   id: 1,
  //   journalNo: "ABC13",
  //   journalDate: "2021-03-19T00:00:00",
  //   currency: {
  //     id: 241,
  //     code: "INR",
  //     name: "Indian Rupee",
  //     currencyCode: null,
  //   },
  //   exchangeRate: 1,
  //   referenceNo: "123",
  //   referenceDate: "2021-03-19T00:00:00",
  //   remarks: "Testing",
  //   lineItems: [
  //     {
  //       generalLedger: {
  //         id: "31",
  //         name: "costGL1",
  //         group: "group1",
  //         type: "expence",
  //         code: "A123B23",
  //         currency: { id: 241, code: "INR", name: null, currencyCode: null },
  //       },
  //       costCenter: {
  //         id: 1,
  //         name: "Air Export",
  //       },
  //       debitAmountFC: 100,
  //       creditAmountFC: 0,
  //       lineItemWHTax: {
  //         organisation: {
  //           id: 1,
  //           name: "Exim International",
  //         },
  //         tdsCode: {
  //           taxId: 1,
  //           taxCode: "TDSR",
  //           taxRate: 10.0,
  //           name: "TDS Receivable",
  //         },
  //         taxableAmountFC: 10.0,
  //         taxRate: 10,
  //       },

  //       // lineItemWHTax: null,
  //     },
  //     {
  //       generalLedger: {
  //         id: "32",
  //         name: "costGL2",
  //         group: "group1",
  //         type: "expence",
  //         code: "A123B23",
  //         currency: { id: 241, code: "INR", name: null, currencyCode: null },
  //       },
  //       costCenter: {
  //         id: 1,
  //         name: "Air Export",
  //       },
  //       debitAmountFC: 0,
  //       creditAmountFC: 100,
  //       lineItemWHTax: {
  //         organisation: {
  //           id: 1,
  //           name: "Exim International123",
  //         },
  //         tdsCode: {
  //           taxId: 1,
  //           taxCode: "TDSR",
  //           taxRate: 10.0,
  //           name: "TDS Receivable",
  //         },
  //         taxableAmountFC: 10.0,
  //         taxRate: 10,
  //       },

  //       // lineItemWHTax: null,
  //     },
  //   ],
  //   journalAttachments: [
  //     {
  //       id: 1,
  //       name: "ABC---12333",
  //       url: "AAAAAAAAA",
  //       journalId: 10,
  //     },
  //   ], // getting null in getByID
  //   attachmentFiles: [],
  // };
};
