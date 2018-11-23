export const squares = (number) => {
  let count = 0;
  for (let i = 2; i <= number; i += 4) {
    count++;
  }
  return number - count;
};
