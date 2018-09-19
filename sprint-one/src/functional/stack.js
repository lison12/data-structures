var Stack = function() {
  var someInstance = {};
  //var array

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value
    count++
  };

  someInstance.pop = function() {
    var removed = storage[count - 1];
    delete storage[count - 1];
    count > 0 ? count-- : 0;
    return removed
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
