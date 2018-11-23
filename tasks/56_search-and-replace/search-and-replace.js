export const myReplace = (str, str1, str2) => {
  const strArr = str.split(' ');
  if (strArr.indexOf(str1)) {
    const firstLetter = str1.charAt(0);
    const check = str1.startsWith(firstLetter.toUpperCase());
    const firstLetterToUpper = str2.charAt(0).toUpperCase() + str2.slice(1);
    if (check) {
      return str.replace(str1, firstLetterToUpper);
    } else {
      return str.replace(str1, str2);
    }
  }
  strArr.splice(strArr.indexOf(str1), 1, str2);
  return strArr.join(' ');
};
