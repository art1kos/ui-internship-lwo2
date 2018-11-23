export const checkLetters = (arr) => {
  const arr1New = arr[0].toLowerCase().split('');
  const arr2New = arr[1].toLowerCase().split('');
  const arr2NewLength = arr2New.length;
  for (let i = 0; i < arr2NewLength; i++) {
    if (arr1New.indexOf(arr2New[i]) == -1) {
      return false;
    }
  }
  return true;
};
