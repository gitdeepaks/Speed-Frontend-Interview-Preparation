function calCTotalSalesWithTax(prd, taxRate) {
  const totalSales = prd.reduce(
    (acc, currVal) => acc + currVal.price * currVal.quantity,
    0
  );

  const taxAmount = (totalSales * taxRate) / 100;

  const totalSalesWithTax = totalSales + taxAmount;

  return parseFloat(totalSalesWithTax.toFixed(2));
}
