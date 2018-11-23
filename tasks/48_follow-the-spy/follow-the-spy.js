export const followTheSpy = (arr) => {
  let possition = [arr[0][0], arr[0][1]];
  const arrLength = arr.length;
  for (let i = 1; i < arrLength; i++) {
    let nextCountry = arr.filter((el) => el[0] === possition[i]);
    possition.push(nextCountry[0][1]);
  }
  return possition.join(', ');
};
