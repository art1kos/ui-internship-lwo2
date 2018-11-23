export const pairwise = (arr, arg) => {
  let sum = 0;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength - 1; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[i] + arr[j] === arg) {
        arr[i] = undefined;
        arr[j] = undefined;
        sum += i + j;
      }
    }
  }
  return sum;
};
