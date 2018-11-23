export const numberToReversedArray = (num) => {
  const arrayNum = ('' + num).split('').reverse();
  return arrayNum.map(Number);
};
