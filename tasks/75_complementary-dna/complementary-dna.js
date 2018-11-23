export const DNAStrand = (str) => {
  str = str.split('');
  let newStr = '';
  const strLength = str.length;
  for (let i = 0; i < strLength; i++) {
    if (str[i] === 'A') {
      newStr += 'T';
    } else if (str[i] === 'T') {
      newStr += 'A';
    } else if (str[i] === 'C') {
      newStr += 'G';
    } else if (str[i] === 'G') {
      newStr += 'C';
    }
  }
  return newStr;
};
