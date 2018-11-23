export const nextInLine = (array, num) => {
  array.push(num);
  return array.shift();
};
