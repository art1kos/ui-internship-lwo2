export const findMissing = (arr) => {
  let d = arr[1] - arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - d !== arr[i - 1] && i !== 0) return arr[i] - d;
  }
};
