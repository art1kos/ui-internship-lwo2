export const validBraces = (braces) => {
  const opposites = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const bracesLength = braces.length;
  if (bracesLength === 2) {
    if (opposites[braces[0]] !== braces[1]) {
      return false;
    } else {
      return true;
    }
  } else {
    for (let i = 0; i < bracesLength; i++) {
      if (opposites[braces[i]] === braces[i + 1]) {
        const newBraces = braces.slice(0, i) + braces.slice(i + 2);
        return validBraces(newBraces);
      }
    }
    return false;
  }
};
