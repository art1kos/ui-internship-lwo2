export const sumFibs = (num) => {
  const arr = [];
  arr[0] = 1;
  arr[1] = 1;
  let sum = 0;
  for (let i = 2; i <= 50; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 2 === 0) {
      arr.splice(j, 1);
    }
  }
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] > num) {
      arr.splice(k);
    }
  }
  for (let l = 0; l < arr.length; l++) {
    sum += arr[l];
  }
  return sum;
};
