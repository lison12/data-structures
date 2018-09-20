var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.first = 0;
  someInstance.last = 0;
  _.extend(someInstance, queueMethods)
  return someInstance
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.last] = value
    this.last ++
  },

  dequeue: function() {
    var remove = this.storage[this.first]
    delete this.storage[this.first]
    this.first ++
    return remove
  },

  size: function() {
    var size = this.last - this.first;
    return size > 0 ? size : 0;
    //return size;
  },
};


