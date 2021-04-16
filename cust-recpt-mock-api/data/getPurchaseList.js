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
      invoiceAmountFC: 2400.0,
      receiptFC: 1200.0,
      lineItemWHTaxes: [
        {
          id: 0,
          voucherId: 0,
          taxId: 32,
          taxCode: "94C",
          taxRate: 10.0,
          taxableAmountFC: 200.0,
          taxAmountFC: 20,
        },
      ],
    },
  ];
};
