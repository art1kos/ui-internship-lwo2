export const findFriend = (arr) => {
  let counter = 0;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if ((arr[i] === 'blue') && (arr[i + 1] === 'blue')
    && (arr[i + 2] === 'red')) {
      counter ++;
    }
    if ((arr[i] === 'red') && (arr[i + 1] === 'blue')
    && (arr[i + 2] === 'blue')) {
      counter ++;
    }
  }
  return counter;
};
