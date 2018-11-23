export const whatIsInAName = (arr, source) => {
  let newArr = [];
  arr.some((obj) => {
    const sourceKeys = Object.keys(source);
    const sourceValues = Object.values(source);
    let temp = 0;
    for (let i = 0; i < sourceKeys.length; i++) {
      if (obj.hasOwnProperty(sourceKeys[i]) &&
       obj[sourceKeys[i]] === sourceValues[i]) {
        temp++;
      }
    }
    if (sourceKeys.length === temp) {
      newArr.push(obj);
      temp = 0;
    }
  });
  return newArr;
};
