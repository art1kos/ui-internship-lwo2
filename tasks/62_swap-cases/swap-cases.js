export const swapCases = (str) => {
  let resStr = '';
  const strLength = str.length;
  for (let i = 0; i < strLength; i++) {
    if (str[i] === str[i].toLowerCase()) {
      resStr += str[i].toUpperCase();
    } else {
      resStr += str[i].toLowerCase();
    }
  }
  return resStr;
};
