export const GOLF_SCORES = {
  HOLE_IN_ONE: 'Hole-in-one',
  EAGLE: 'Eagle',
  BIRDIE: 'Berdie',
  PAR: 'Par',
  BOGEY: 'Bogey',
  DOUBLE_BOGEY: 'Double_bogey',
  GO_HOME: 'Go_home'};

export const golfScore = (par, strokes) => {
  if (1 == strokes) {
    return GOLF_SCORES.HOLE_IN_ONE;
  } else if (par - 2 >= strokes) {
    return GOLF_SCORES.EAGLE;
  } else if (par - 1 === strokes) {
    return GOLF_SCORES.BIRDIE;
  } else if (par === strokes) {
    return GOLF_SCORES.PAR;
  } else if (par + 1 === strokes) {
    return GOLF_SCORES.BOGEY;
  } else if (par + 2 === strokes) {
    return GOLF_SCORES.DOUBLE_BOGEY;
  } else if (par + 3 <= strokes) {
    return GOLF_SCORES.GO_HOME;
  }
};
