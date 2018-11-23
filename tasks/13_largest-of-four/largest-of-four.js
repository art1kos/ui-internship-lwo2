export const largestOfFour = (arr) => {
  let maxArray = [];
  for (let i = 0; i < arr.length; i++) {
    maxArray[i] = Math.max.apply(null, arr[i]);
  }
  return maxArray;
};
