export const truncateArray = (arr, num) => {
  if (num >= arr.lenth) return arr;
  else return arr.slice(num, arr.lenth);
};
