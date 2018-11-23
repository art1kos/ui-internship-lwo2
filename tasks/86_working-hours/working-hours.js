/* eslint-disable-next-line */
const INPUT_DATA = [
  {
    'day': 'sat',
    'from': '10:00',
    'to': '23:00',
  },
  {
    'day': 'mon',
    'from': '11:00',
    'to': '23:00',
  },
  {
    'day': 'tue',
    'from': '11:00',
    'to': '23:00',
  },
  {
    'day': 'wed',
    'from': '11:00',
    'to': '23:00',
  },
  {
    'day': 'thu',
    'from': '12:00',
    'to': '23:00',
  },
  {
    'day': 'fri',
    'from': '12:00',
    'to': '23:00',
  },
  {
    'day': 'sun',
    'from': '11:00',
    'to': '23:00',
  },
];
/* eslint-disable-next-line */
const OUTPUT_DATA = [
  'MON - WED: 11:00 - 23:00',
  'THU - FRI: 12:00 - 23:00',
  'SAT: 10:00 - 23:00',
  'SUN: 11:00 - 23:00',
];
export const formatWorkingHours = (INPUT_DATA) => {
  if (INPUT_DATA.length === 0) return [];
  let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  days = days.map((el) => {
    let curr = INPUT_DATA.find((e) => e['day'] === el);
    return curr;
  });
  let result = [];
  for (let i = 0; i < days.length; i++) {
    let currChunk = [days[i]];
    for (let j = i + 1; j < days.length - 1; j++) {
      if (days[i]['from'] === days[j]['from']) {
        currChunk.push(days[j]);
      } else {
        i += currChunk.length - 1;
        break;
      }
    }
    if (currChunk.length === 1) {
      /* eslint-disable-next-line */
      result.push(currChunk[0]['day'].toUpperCase() + ': ' + currChunk[0]['from'] + ' - ' + currChunk[0]['to']);
    } else {
      /* eslint-disable-next-line */
      result.push(currChunk[0]['day'].toUpperCase() + ' - ' + currChunk[currChunk.length - 1]['day'].toUpperCase() + ': ' + currChunk[0]['from'] + ' - ' + currChunk[0]['to']);
    }
  }
  return result;
};
