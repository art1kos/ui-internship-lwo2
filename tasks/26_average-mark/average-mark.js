export const getAverage = (arr) => {
  let sumMarks = 0;
  const markLength = arr.length;
  for (let i = 0; i < markLength; i++) {
    sumMarks += arr[i];
  }
  const average = sumMarks / markLength;
  return Math.floor(average);
};
