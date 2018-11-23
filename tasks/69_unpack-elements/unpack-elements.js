export const unpackArray = (arr) => {
  const newArr = [];
  const unpack = function(arrX) {
    if (Array.isArray(arrX)) {
      for (let item of arrX) {
        unpack(item);
      }
    } else {
      newArr.push(arrX);
    }
  };
  arr.forEach(unpack);
  return newArr;
};
