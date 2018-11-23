export const addedChar = (strFirst, strSecond) => {
  let strSecondCopy = strSecond;
  for (let i = 0; i < strFirst.length; i++) {
    strSecondCopy = strSecondCopy.replace(strFirst[i], '');
  }
  return strSecondCopy[1];
};
