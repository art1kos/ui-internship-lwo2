export const binaryEncode = (str = '') => {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    const encode = str.charCodeAt(i).toString(2);
    if (encode.length === 6) {
      newArr.push('00' + encode);
    }
    if (encode.length === 7) {
      newArr.push('0' + encode);
    }
  }
  return newArr.join(' ');
};
