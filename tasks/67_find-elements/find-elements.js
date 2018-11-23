export const findElement = (arr, cond) => {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (cond(arr[i])) {
      return arr[i];
    }
  }
};
