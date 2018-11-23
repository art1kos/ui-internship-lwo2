export const orbitalPeriod = (arr) => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  let newArr = [];
  const getOrbPeriod = (obj) => {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };
  /* eslint-disable-next-line */
  for (let el in arr) {
    newArr.push(getOrbPeriod(arr[el]));
  }
  return newArr;
};
