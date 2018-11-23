export const bouncingBall = (h, bounce, window) => {
  let reBounce = 0;
  if (h > 0 && 0 < bounce < 2 && window < h) {
    reBounce = 1;
  } else {
    return -1;
  }
  h *= bounce;
  while (h > window) {
    reBounce += 2;
    h *= bounce;
  }
  return reBounce;
};
