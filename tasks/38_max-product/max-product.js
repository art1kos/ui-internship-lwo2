export const maxProduct = (arr) => {
  let resOfMax = arr[0] * arr[1];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (resOfMax < arr[i] * arr[i + 1]) resOfMax = arr[i] * arr[i + 1];
  }
  return resOfMax;
};
