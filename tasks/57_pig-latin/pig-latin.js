export const translatePigLatin = (str) => {
  const regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    return str + 'way';
  } else {
    const vowelIndex = str.indexOf(str.match(regex)[0]);
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay';
  }
};
