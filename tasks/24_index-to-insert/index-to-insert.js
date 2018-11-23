export const getIndexToInsert = (arr, num) => {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
};
