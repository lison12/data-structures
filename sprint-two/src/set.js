var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this.storage.push(item)
  }
};

setPrototype.contains = function(item) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      return true;
    }
  }
  return false;
  // return _.reduce(this.storage, function(ele) {
  //   return item === ele;
  // }, false)
};

setPrototype.remove = function(item) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      this.storage.splice(i, 1)
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
   Linear time complexity O(n)
 */
