var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var someInstance = {};
  someInstance.last = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods)
  return someInstance;
};

var stackMethods = {

  push: function(value) {
    this.storage[this.last] = value;
    this.last ++
  },

  pop: function() {
    var remove = this.storage[this.last-1]
    delete this.storage[this.last-1]
    this.last --
    return remove
  },

  size: function() {
    return this.last > 0 ? this.last : 0
  },
};







