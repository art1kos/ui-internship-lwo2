export const traverseTree = (obj, callback) => {
  callback(obj);
  const objChildrenLength = obj.children.length;
  if (obj.children) {
    for (let i = 0; i < objChildrenLength; i++) {
      traverseTree(obj.children[i], callback);
    }
  }
};
