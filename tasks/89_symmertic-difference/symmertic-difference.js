export const sym = (...args) => {
  let arrArgs = args;
  const symDiff = (arr1, arr2) => {
    let unique = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) < 0 && unique.indexOf(arr1[i]) < 0) {
        unique.push(arr1[i]);
      }
    }
    arr2.forEach((item) => {
      if (arr1.indexOf(item) < 0 && unique.indexOf(item) < 0) {
        unique.push(item);
      }
    });
    return unique;
  };
  return arrArgs.reduce(symDiff).sort((a, b) => {
    return a-b;
  });
};
