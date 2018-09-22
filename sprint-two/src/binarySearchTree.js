var BinarySearchTree = function(value) { // 5
  //rootNode = value;
  //node.root = value;
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;

  _.extend(node, binarySearchTreeMethods)  

  return node;
};

var binarySearchTreeMethods = {
  insert : function(value){ // 2
    this.traverse(this, value); 
    // check to see if there is a root node
    // if no create one with given value
    //if (this.node.value === value) { 
  },

  contains : function(value){
    return this.search(this, value);
  },

  depthFirstLog : function(callback) {
    //traverse tree
    //apply callback on every node
    function traverseTree(node) {
      callback(node.value)
      if (node.left) {
        traverseTree(node.left)
      } 
      if (node.right) {
        traverseTree(node.right) 
      }
    }
    traverseTree(this);
  },

  traverse : function(node, value) {
    if (value < node.value) {
      if (node.left) {
        this.traverse(node.left, value);
      } else {
        // var node =BinarySearchTree(value);
        node.left = BinarySearchTree(value);
        console.log("left child", node.left ) // equal to value or node?
      }  
    } else if (value > node.value) {
      if (node.right) {
        this.traverse(node.right, value);
      } else {
        node.right = BinarySearchTree(value);
        console.log("right child", node.right ) // equal to value or node?
      }
    }
  },

  search : function(node, target) {
    var result;
    if (node.value === target) {
      result = true;
    } else if (target < node.value) {
      if (node.left) {
        result = this.search(node.left, target);
      } else {
        return false;
      }  
    } else if (target > node.value) {
      if (node.right) {
        result = this.search(node.right, target);
      } else {
         return false;
      }
    }
    return result;
  },
    // return boolean
    // if yes check if given value is less or greater than node
    // if less, check if left node is null
    // if not null, call insert 
    // if yes null

}



/*
 * Complexity: What is the time complexity of the above functions?
 */
