export const addTogether = (...argument) => {
  const arr = [...argument];
  if (arr.some((el) => typeof el === 'string')) return undefined;
  else if (arr.length > 1) {
    return arr.reduce((a, e) => a + e);
  }
  return function(...arg) {
    if (arg.some((el) => typeof el !== 'number')) return undefined;
    return arr[0] + arg[0];
  };
};
