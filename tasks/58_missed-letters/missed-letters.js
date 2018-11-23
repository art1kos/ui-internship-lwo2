export const findLetter = (str) => {
  if (str.charAt(0) !== 'a') return undefined;
  const strArr = str.split('');
  /* eslint-disable-next-line */
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== alphabet[i]) return alphabet[i];
  }
};
