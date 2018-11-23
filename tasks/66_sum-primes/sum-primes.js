export const sumPrimes = (num) => {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

const isPrime = (val) => {
  for (let i = 2; i < val; i++) {
    if (val % i === 0) {
      return false;
    }
  }
  return true;
};
