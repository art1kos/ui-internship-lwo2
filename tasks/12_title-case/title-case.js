export const titleCase = (str) => {
  let newStr = str.split(' ');
  for ( let i = 0; i < newStr.length; i++ ) {
    let upperLetter = newStr[i].charAt(0).toUpperCase();
    newStr[i] = upperLetter + newStr[i].substr(1).toLowerCase();
  }
  return newStr.join(' ');
};
