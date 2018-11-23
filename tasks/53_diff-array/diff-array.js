export const diffArray = (arr1, arr2) => {
  return arr1.concat(arr2).filter((el) => {
    if (!(arr1.includes(el) && arr2.includes(el))) return el;
  });
};
