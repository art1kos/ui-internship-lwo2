export const convertToRoman = (num) => {
  /* eslint-disable-next-line */
  const romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  const numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let numToRoman = [];
  const numbersLength = numbers.length;
  for (let i = numbersLength - 1; i >= 0; i--) {
    const proportion = parseInt(num / numbers[i]);
    numToRoman.push(proportion);
    num = num % numbers[i];
  }
  let roman = '';
  for (let j = 0; j < numToRoman.length; j++) {
    for (let k = 0; k < numToRoman[j]; k++) {
      const index = numbersLength - j - 1;
      roman += romanNumeral[index];
    }
  }
  return roman;
};
