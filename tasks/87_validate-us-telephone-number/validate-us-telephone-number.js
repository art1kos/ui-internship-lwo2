export const telephoneCheck = (str) => {
  let regEx = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/;
  return regEx.test(str);
};
