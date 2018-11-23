export const runningAverage = () => {
  let arr = [];
  return function rAvg(num) {
    arr.push(num);
    /* eslint-disable-next-line */
    return arr.reduce((a, b) => {return a + b}) / arr.length;
  };
};
