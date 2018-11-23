export const fatFingers = (str) => {
  const strArr = str.split('');
  let flag = false;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'a') {
      flag = !flag;
      strArr.splice(i, 1);
    }
    if (flag) {
      strArr[i] = strArr[i].toUpperCase();
    }
  }
  return strArr.join('');
};
