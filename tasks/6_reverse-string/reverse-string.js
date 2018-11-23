export const reverseString = (str) =>{
  let newStr = str.split('');
  let result = newStr.reverse();
  return result.join('');
};
