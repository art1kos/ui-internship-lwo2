export const firstNSmallest = (arr, num) => {
  const newArray = arr.slice();
  while (newArray.length > num) {
    newArray.splice(newArray.lastIndexOf(Math.max(...newArray)), 1);
  }
  return newArray;
};

