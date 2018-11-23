export const arrayLeaders = (arr) => {
  let res = [];
  const arrCopy = arr.slice();
  const arrCopyLength = arrCopy.length;
  for (let i = 0; i < arrCopyLength; i++) {
    let currN = arrCopy[i];
    let currentChunk = arrCopy.slice(i + 1, arrCopyLength);
    currentChunk = currentChunk.reduce((a, b)=> a + b, 0);
    if (currN>currentChunk) res.push(currN);
  }
  return res;
};
