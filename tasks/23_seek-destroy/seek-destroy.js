export const destroyer = (arr, ...args ) => {
  return arr.filter(destroyNum);

  function destroyNum(element) {
    return !args.includes(element);
  }
};
