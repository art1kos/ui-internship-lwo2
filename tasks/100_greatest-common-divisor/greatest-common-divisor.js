export const greatestCommonDivisor = (x, y) => {
  if (!y) {
    return x;
  }
  return greatestCommonDivisor(y, x % y);
};
