export const leastCommonMultiple = (a, b) => {
  return a * b / greatestCommonDivisor(a, b);
};
const greatestCommonDivisor = (x, y) => {
  if (!y) {
    return x;
  }
  return greatestCommonDivisor(y, x % y);
};
