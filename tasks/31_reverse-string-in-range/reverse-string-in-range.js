export const reverseStringInRange = (str, arr) => {
  let newStr = str.split('');
  const curr = str.slice(arr[0], arr[1] + 1).split('').reverse().join('');
  newStr.splice(arr[0], curr.length, curr);
  newStr = newStr.join('');
  return newStr;
};
