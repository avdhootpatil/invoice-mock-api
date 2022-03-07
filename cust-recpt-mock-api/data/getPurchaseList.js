module.exports = () => {
  return [
    {
      location: {
        id: 1,
        name: "maharashtra",
      },
      lineItemId: 0,
      voucherId: 0,
      invoiceId: 1,
      invoiceNo: "b12/232",
      invoiceDate: "2021-04-08T22:45:30.9823626+05:30",
      invoiceDueDate: "2021-04-08T22:45:30.9813315+05:30",
      outstandingAmountFC: 30,
      invoiceTaxableAmountFC: 50,
      invoiceAmountFC: 2400.0,
      receiptAmountFC: 0,
      lineItemWHTaxes: [
        // {
        //   id: 0,
        //   voucherId: 0,
        //   taxId: 32,
        //   taxCode: "94C",
        //   taxRate: 10.0,
        //   taxableAmountFC: 200.0,
        //   taxAmountFC: 20,
        // },
      ],
    },
    {
      id: 36,
      invoiceAmountFC: 5.26,
      invoiceDate: "2021-09-30T00:00:00",
      invoiceDueDate: null,
      invoiceId: 5064,
      invoiceNo: "00012",
      invoiceTaxableAmountFC: 50,
      lineItemWHTaxes: [],
      location: {
        id: 1,
        name: "maharashtra",
      },
      outstandingAmountFC: 3.26,
      receiptAmountFC: 0,
      voucherId: 17,
    },
  ];
};
