export const sumPrimeIndexedElements = (arr) => {
  const isPrime = (val) => {
    for (let i = 2; i < val; i++) {
      if (val % i === 0) {
        return false;
      }
    }
    return true;
  };
  const arrLength = arr.length;
  let newArr = [];
  if (arrLength === 0) {
    return 0;
  } else {
    for (let i = 2; i < arrLength; i++) {
      if (isPrime(i)) {
        newArr.push(arr[i]);
      }
    }
    return newArr.reduce((a, b) => {
      return a + b;
    });
  }
};
