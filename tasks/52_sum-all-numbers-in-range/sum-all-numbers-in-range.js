export const sumAll = (arr) => {
  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  const numberOfDigits = max - min + 1;
  return (max + min) * numberOfDigits / 2;
};
