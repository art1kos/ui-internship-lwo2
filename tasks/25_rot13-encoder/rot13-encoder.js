export const rot13Encoder = (str) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const rot13Alphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLM'.split('');
  let result = '';
  const strLength = str.length;
  const alphabetLength = alphabet.length;
  for (let i = 0; i < strLength; i++) {
    for (let j = 0; j < alphabetLength; j++) {
      if (str[i] === alphabet[j]) {
        result += rot13Alphabet[j];
      }
    }
    if (str[i] === ' ') {
      result += ' ';
      continue;
    } else if (!str[i].match(/[A-Z]/)) {
      result += str[i];
    }
  }
  return result;
};
