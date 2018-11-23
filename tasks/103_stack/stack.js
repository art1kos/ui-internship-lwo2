class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}
export class Stack {
  constructor() {
    this.size = 0;
    this.last = null;
  }
  push(value) {
    let node = new Node(value);
    if (this.last === null) {
      this.last = node;
    } else {
      node.prev = this.last;
      this.last = node;
    }
    this.size++;
  }
  pop() {
    if (this.last === null) {
      return;
    }
    let result = this.last.value;
    this.last = this.last.prev;
    this.size--;
    return result;
  }
  isEmpty() {
    return this.size === 0;
  }
  size() {
    return this.size;
  }
}
