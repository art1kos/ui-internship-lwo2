export const binaryDecode = (str) => {
  if (!str) return '';
  const strArr = str.split(' ');
  const newArr = [];
  const strArrLength = strArr.length;
  for (let i = 0; i < strArrLength; i++) {
    newArr.push(String.fromCharCode(parseInt(strArr[i], 2)));
  }
  return newArr.join('');
};
