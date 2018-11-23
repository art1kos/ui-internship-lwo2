export const getVowelCount = (str) => {
  str = str.toLowerCase();
  const newStr = str.split('');
  const newStrLength = newStr.length;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0;
  for (let i = 0; i < newStrLength; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      vowelsCount++;
    }
  }
  return vowelsCount;
};
