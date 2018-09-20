var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

this.storage = {};
this.last = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.last] = value;
  this.last++;
},

Stack.prototype.pop = function() {
  var remove = this.storage[this.last - 1];
  delete this.storage[this.last - 1];
  this.last--;
  return remove;
},

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
}


