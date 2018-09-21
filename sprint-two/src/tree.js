var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target, node) {
  //check value is equal to target
  node = node || this;
  var result;
  if (node.value === target) {
    return true;
  }
  //check if there any children
  if (node.children.length > 0) {
    for (var i = 0; i < node.children.length; i++) {
      result = this.contains(target, node.children[i]);
      if (result === true) {
        return result;
      }
    }  
  }
  return false;   
  
  //perform recursive function on the children in array
  //return boolean
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
