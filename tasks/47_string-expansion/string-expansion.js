export const stringExpansion = (str) => {
  let res = '';
  const strCopy = str.split('');
  let counter = 1;
  const strCopyLength = strCopy.length;
  for (let i = 0; i < strCopyLength; i++) {
    if (Number(strCopy[i])) counter = Number(strCopy[i]);
    else res+= strCopy[i].repeat(counter);
  }
  return res;
};
