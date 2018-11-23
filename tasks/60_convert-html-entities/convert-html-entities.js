export const convertHTML = (str) =>{
  const strArr = str.split('');
  const strArrLength = strArr.length;
  const obj = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
  };
  for (let i = 0; i < strArrLength; i++) {
    for (let prop in obj) {
      if (strArr[i] === prop) {
        strArr.splice(i, 1, obj[prop]);
      }
    }
  }
  return strArr.join('');
};
