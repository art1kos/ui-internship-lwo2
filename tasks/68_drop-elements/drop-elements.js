export const dropElements = (arr, cond) => {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (cond(arr[i])) return (arr.slice(i));
    if (arr.length === arr[i] ) return [];
  }
};
