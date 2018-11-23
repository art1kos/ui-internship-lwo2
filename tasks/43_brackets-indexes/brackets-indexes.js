export const findCloseIndex = (string, n) => {
  if (string[n] !== '(') return -1;
  let opennedBrackets = 0;
  const stringLength = string.length;
  for (let i = n; i < stringLength; i++) {
    if (string[i] === '(') opennedBrackets++;
    if (string[i] === ')') opennedBrackets--;
    if ( opennedBrackets === 0) return i;
  }
};
