export const smallestCommons = (arr) => {
  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }
  let res = range[range.length - 1];
  while (!range.every((el) => res % el === 0)) {
    res++;
  }
  return res;
};
