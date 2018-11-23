export const arrayChunks = (arr, num) => {
  let newArr = arr.slice();
  let res = [];
  for (let i = 0; i < Math.ceil(arr.length / num); i++) {
    let arrChunk = [];
    arrChunk = newArr.splice(0, num);
    res.push(arrChunk);
  }
  return res;
};
