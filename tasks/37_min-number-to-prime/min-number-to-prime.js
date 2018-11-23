export const minNumberToPrime = (arr) => {
  let sum= arr.reduce((a, b) => a + b, 0);
  const isPrime = (value) => {
    for (let i = 2; i <= value / 2 + 1; i++) {
      if (value % i === 0 && i !== value) return false;
    }
    return true;
  };
  let count = 0;
  while (!isPrime(sum + count)) {
    count++;
  }
  return count;
};
