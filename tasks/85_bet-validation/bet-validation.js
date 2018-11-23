/* eslint-disable-next-line */
export const validate_bet = (arr, str) => {
  let strArr = str.split(' ');
  for (let i = 0; i < arr[1]; i++) {
    if (strArr[i] > arr[1]) {
      return 'None';
    }
  }
  strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === ';') return 'None';
  }
  strArr = strArr.filter((el) => {
    return Number(el);
  }).map((el) => {
    return Number(el);
  }).sort((a, b) => a - b);
  if (strArr.length < arr[0]) return 'None';
  return strArr;
};
