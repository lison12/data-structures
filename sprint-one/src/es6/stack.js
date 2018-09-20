class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.last = 0;
  }
  push(value) {
    this.storage[this.last] = value;
    this.last++;
  }

  pop() {
    var remove = this.storage[this.last - 1];
    delete this.storage[this.last - 1];
    this.last--;
    return remove;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}