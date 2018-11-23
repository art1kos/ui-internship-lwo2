export const removeDuplicates = (arr) => {
  /* eslint-disable-next-line */
  let res =  [...new Set(arr)];
  return res;
};
