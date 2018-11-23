export const confirmEnding = (str, el) => {
  let res = false;
  let elLength = el.length;
  let strLength = str.length;
  let ending = str.substring(strLength - elLength, str.length);
  if (ending === el) {
    return true;
  }
  return res;
};
