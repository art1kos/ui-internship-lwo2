export const abbreviated = (str) => {
  const strArr = str.split(' ');
  return strArr.map((el, i) => {
    if (i === 0) {
      return el;
    } else {
      return el.split('').splice(0, 1) + '.';
    }
  }).join(' ');
};
