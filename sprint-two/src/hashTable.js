

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var bucket = [];
  var tuple = [];
  var bucket = this._storage.get(index)
    if (!bucket) { // checking if bucket exists
      var bucket = [];
      tuple.push(k, v);
      bucket.push(tuple); 
      this._storage.set(index, bucket); // 
    }else{
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === k) {
          bucket[i][1] = v;
          return;
        }
      }
      tuple.push(k, v);
      bucket.push(tuple); 
    }
  // for (var i = 0; i < bucket.length; i++) {
  //   if (bucket[i][0] !== k) {
  //     tuple.push(k, v);
  //     bucket.push(tuple);
  //   }
  // }
  

  // if (this._storage.get(index) === undefined) {
  //   this._storage.set(index, new hashLink(k, v));
  // }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get the bucket with the provided index
  //loop thru the bucket array
  //check to see if k value is in the tpl array
  //return value at tpl at index 1
  
  var bucket = this._storage.get(index)
  // bucket.forEach(function(item) {
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1]
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index)
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1)
    }
  }
};




// var hashLink = function(key, value) {
//   this.key = key;
//   this.value = value;
//   this.next = null;
// }

/*
 * Complexity: What is the time complexity of the above functions?
 */


