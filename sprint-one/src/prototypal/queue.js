var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var someInstances = Object.create(queueMethods);
someInstances.storage = {};
someInstances.first = 0;
someInstances.last = 0;
return someInstances;
};

var queueMethods = {
  
  enqueue: function(value) {
    this.storage[this.last] = value;
    this.last++;
  },

  dequeue: function() {
    var remove = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return remove;
  },

  size: function() {
    return Object.keys(this.storage).length;
  },
};


