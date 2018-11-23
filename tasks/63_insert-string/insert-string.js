export const insert = (str, text, num = 0) => {
  const strArrForNum = str.split('');
  if (!text) return str;
  if (num) strArrForNum.splice(num, 0, text);
  else strArrForNum.splice(num, 0, text);
  return strArrForNum.join('');
};
