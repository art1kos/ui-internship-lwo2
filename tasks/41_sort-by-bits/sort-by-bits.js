export const sortByBits = (arr) => {
  const arrNew = arr.slice();
  arrNew.sort((a, b) => {
    const firstNumBitValue = sumBin((a).toString(2));
    const secondNumBitValue = sumBin((b).toString(2));

    if (firstNumBitValue === secondNumBitValue) {
      return a - b;
    } else {
      return firstNumBitValue - secondNumBitValue;
    }
  });
  return arrNew;
};

function sumBin(numb) {
  let count = 0;
  const elementLength = numb.length;
  for (let i = 0; i < elementLength; i++) {
    if (+numb[i] === 1) {
      count++;
    }
  }
  return count;
}

