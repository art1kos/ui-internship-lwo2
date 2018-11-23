export const uniteUnique = (...arr) =>{
  const newArr = [].concat(...arr);
  let res = [];
  return newArr.filter((value) => {
    if (res.indexOf(value) === -1) {
      res.push(value);
      return true;
    }
  });
};
