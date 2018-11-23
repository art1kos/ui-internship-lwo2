export const uniqueInOrder = (order) => {
  const finalArray = [];
  let currArray = [];
  if (Array.isArray(order) === false) {
    currArray = order.split('');
  } else {
    currArray = order;
  }
  const tempArrayLen = currArray.length;
  for (let i = 0; i < tempArrayLen; i++) {
    if (currArray[i] != currArray[i + 1]) {
      finalArray.push(currArray[i]);
    }
  }
  return finalArray;
};
