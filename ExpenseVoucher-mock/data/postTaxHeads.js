module.exports = () => {
  return {
    taxHeads: [
      // {
      //   invoiceId: 0,
      //   taxAmount: 16.2,
      //   code: "SGST",
      //   taxRatePart: 50.0,
      //   taxType: "GST",
      //   applicableOn: "ITEM",
      // },
      {
        invoiceId: 0,
        taxAmount: 16.2,
        code: "CESS",
        taxRatePart: 100.0,
        taxType: "GST",
        applicableOn: "ITEM",
      },
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
        code: "GST",
        taxRatePart: 100.0,
        taxType: "GST",
        applicableOn: "ITEM",
      },
      // {
      //   invoiceId: 0,
      //   taxAmount: 16.2,
      //   code: "VAT",
      //   taxRatePart: 100.0,
      //   taxType: "VAT",
      //   applicableOn: "ITEM",
      // },
    ],
    isTaxExempted: false,
  };
};
