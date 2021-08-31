module.exports = () => {
  return [
    // {
    //   invoiceId: 0,
    //   taxAmount: 16.2,
    //   code: "SGST",
    //   taxRatePart: 50.0,
    //   taxType: "GST",
    //   applicableOn: "ITEM",
    // },
    // {
    //   invoiceId: 0,
    //   taxAmount: 16.2,
    //   code: "CGST",
    //   taxRatePart: 50.0,
    //   taxType: "GST",
    //   applicableOn: "ITEM",
    // },
    // {
    //   invoiceId: 0,
    //   taxAmount: 0.0,
    //   code: "GST_ZEROED",
    //   taxRatePart: 0.0,
    //   taxType: "GST",
    //   applicableOn: "ITEM",
    // },
    {
      invoiceId: 0,
      taxAmount: 16.2,
      code: "IGST",
      taxRatePart: 100.0,
      taxType: "GST",
      applicableOn: "ITEM",
    },

    // {
    //   invoiceId: 0,
    //   lineItemId: 0,
    //   id: 0,
    //   taxAmount: 0.0,
    //   code: "GST_ZEROED",
    //   taxRatePart: 0.0,
    //   taxType: null,
    //   applicableOn: null,
    //   isActive: true,
    // },
    // {
    //   invoiceId: 0,
    //   lineItemId: 0,
    //   id: 0,
    //   taxAmount: 0.0,
    //   code: "CESS",
    //   taxRatePart: 100.0,
    //   taxType: null,
    //   applicableOn: null,
    //   isActive: true,
    // },
  ];
};
