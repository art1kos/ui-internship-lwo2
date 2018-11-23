export const humanizeFormat = (num) => {
  if (!(num)) {
    return '';
  } else if (num.toString().endsWith('1')) {
    return num += 'st';
  } else if (num.toString().endsWith('2')) {
    return num += 'nd';
  } else if (num.toString().endsWith('3')) {
    return num += 'rd';
  } else {
    return num += 'th';
  }
};