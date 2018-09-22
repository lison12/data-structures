var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value) {
  //Create a node with value
    var newNode = new Node(value);
  //assign next of current tail to the new node if a tail exists
    if(list.tail){
      list.tail.next = newNode;
    }
  //tail pointed to the new node
    list.tail = newNode;
  //if there are no nodes then head points to new node
    if(!list.head){
      list.head = newNode;
    }
    
  };
  list.removeHead = function() {
  // Assign head to its next node
    var returnValue = list.head.value;
    if(list.head.next) {
      list.head = list.head.next;
    }
  // do you want to delete?
   // delete ;
  // return the deleted node
    return returnValue;
  };
  list.contains = function(target) {
    //if the link list is empty return false
    //look at the list head value and compare to the given value
    //if it contains it return true
    //else if head points to a node, move to next node
    //if its at the last node, then return false if it doesn't contain target
    var result = false;
    var node;
  
    if (list.head) {
      node = list.head;  
    } else {
      return false;
    }
        
    while (node) {
      result = findTarget(node);
      if(result){
        return true;
      }
      node = node.next;
    }
    function findTarget(node) {
      if (node.value === target) {
        return true;  
      }else{
        return false;
      }
    }
    return result;
  };
  return list;
};

var Node = function(value) {
  this.value = value;
  this.next = null;
};
/*
 * Complexity: What is the time complexity of the above functions?
    Linear time complexity O(n)
 */