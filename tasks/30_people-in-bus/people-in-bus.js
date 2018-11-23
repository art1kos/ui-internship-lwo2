export const peopleInBus = (arr) => {
  let resIn = arr.reduce((a, c) => {
    return a + c[0];
  }, 0);
  let resOut = arr.reduce((a, c) => {
    return a + c[1];
  }, 0);
  return resIn - resOut;
};
