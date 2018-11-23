/* eslint-disable-next-line */
export const nbMonths = (startPriceOld, startPriceNew, savingsPerMonth, percentLossByMonth) => {
  if (startPriceOld >= startPriceNew) {
    return [0, startPriceOld - startPriceNew];
  }
  let totalSave = 0;
  let months = 0;
  let depreciateOfPiceOld = startPriceOld;
  let depreciateOfPriceNew = startPriceNew;
  let lossPercent = percentLossByMonth;
  while ((totalSave + depreciateOfPiceOld) < depreciateOfPriceNew) {
    months += 1;
    if (months % 2 === 0) {
      lossPercent += 0.5;
    }
    totalSave += savingsPerMonth;
    depreciateOfPiceOld -= depreciateOfPiceOld * (lossPercent / 100);
    depreciateOfPriceNew -= depreciateOfPriceNew * (lossPercent / 100);
  }
  /* eslint-disable-next-line */
  return [months, Math.round(totalSave + depreciateOfPiceOld - depreciateOfPriceNew)];
};
