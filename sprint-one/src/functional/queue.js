var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var last = 0; // 2
  var first = 0; // 0
  //var size = last - first // 2


  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last ++
  };

  someInstance.dequeue = function() {
    var firstRemove = storage[first]
    delete storage[first]
    first ++
    return firstRemove
  };

  someInstance.size = function() {
    //return size;
    //if empty obj then return 0
    // if (Object.keys(storage).length === 0) {
    //   return 0
    // } else {
    return last - first > 0 ? last - first : 0
  };

  return someInstance;
};
