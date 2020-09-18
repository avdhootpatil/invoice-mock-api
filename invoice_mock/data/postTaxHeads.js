module.exports = () => {
  return [
    {
      invoiceId: 0,
      taxAmount: 16.2,
      code: "SGST",
      taxRatePart: 50.0,
      taxType: "GST",
      applicableOn: "ITEM",
    },
    {
      invoiceId: 0,
      taxAmount: 16.2,
      code: "CGST",
      taxRatePart: 50.0,
      taxType: "GST",
      applicableOn: "ITEM",
    },
  ];
};
