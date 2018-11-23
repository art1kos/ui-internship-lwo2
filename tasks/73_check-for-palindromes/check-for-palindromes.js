export const palindrome = (str) => {
  let newStr = str.toLowerCase();
  const newStrLength = newStr.length;
  for (let i = 0; i < newStrLength; i++) {
    newStr = newStr.replace(/[^a-zA-Z0-9]/g, '');
  }
  const strCopy = newStr.split('').reverse().join('');
  return strCopy === newStr;
};
