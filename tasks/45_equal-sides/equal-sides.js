export const findEqualIndex = (arr) => {
  const arrLeft = arr.slice();
  const arrRight = arr.slice();
  let sumLeft = 0;
  let sumRight = 0;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    sumLeft = arrLeft.slice(0, i + 1).reduce((a, b) => {
      return a + b;
    });
    sumRight = arrRight.slice(i, arrLength + 1).reduce((a, b) => {
      return a + b;
    });
    if (sumLeft === sumRight) return i;
    if (i + 1 === arrLength) return -1;
  }
};
