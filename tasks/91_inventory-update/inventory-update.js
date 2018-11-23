export const updateInventory = (arr1, arr2) =>{
  let inventory = arr1.concat(arr2).reduce((acc, next) => {
    if (acc[next[1]]) {
      acc[next[1]] += next[0];
    } else {
      acc[next[1]] = next[0];
    }
    return acc;
  }, {});
  return Object.keys(inventory).map((value) => {
    return [inventory[value], value];
  }).sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    } else if (a[1] > b[1]) {
      return 1;
    } else {
      return 0;
    }
  });
};
