export const rowWeights = (arr) => {
  let teamFirst = 0;
  let teamSecond = 0;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (i % 2 === 0) {
      teamFirst += arr[i];
    } else {
      teamSecond += arr[i];
    }
  }
  return [teamFirst, teamSecond];
};
