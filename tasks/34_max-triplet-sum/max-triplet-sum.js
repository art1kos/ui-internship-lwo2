export const maxTripletSum = (arr) => {
  arr.sort(function(a, b) {
    return b - a;
  });
  /* eslint-disable-next-line */
  const uniqueArr = [...new Set(arr)];
  return uniqueArr[0] + uniqueArr[1] + uniqueArr[2];
};
