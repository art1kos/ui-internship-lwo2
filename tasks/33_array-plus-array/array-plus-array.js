export const arrayPlusArray = (arr1, arr2) => {
  let sum = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    sum.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  return sum;
};
