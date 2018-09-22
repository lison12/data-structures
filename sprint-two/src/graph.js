

// Instantiate a new graph
var Graph = function() {
  this.vert = [];
  this.neighbors = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vert.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //traverse graph
  //return true if node is contained in the graph
  //otherwise return false
  for (var i = 0; i < this.vert.length; i++) {
    if (this.vert[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // for (var i = 0; i < this.vert.length; i++) {
  //   if (this.vert[i] === node) {
  //     //delete this.vert[i];
  this.vert = this.vert.filter(function(value, i, array) {
    return value !== node;
  });
  
  for(var i =0; i<this.neighbors.length; i++){
    if(this.neighbors[i][0] === node || this.neighbors[i][1] === node){
      this.removeEdge(this.neighbors[i][0], this.neighbors[i][1]);
    }
    // if(this.neighbors[i][1] === node){
    //   Graph.prototype.removeEdge(this.neighbors[i][1], this.neighbors[i][0]);
    // }
  }
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.neighbors.length; i++) {
    if (this.neighbors[i][0] === fromNode && this.neighbors[i][1] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var result = [fromNode, toNode]; 
  this.neighbors.push(result);
  this.neighbors.push([toNode,fromNode]);
  
  // console.log('neb', this.neighbors)
  // for (var i = 0; i < this.vert.length; i++) {
    
  //   if (this.vert[i] === fromNode) {
  //     if (!this.vert[i].neighbors){
  //       this.vert[i].neighbors = [];
  //     }  
  //     this.vert[i].neighbors.push(toNode);
  //   }
  //   if (this.vert[i] === toNode) {
  //     if (!this.vert[i].neighbors){
  //       this.vert[i].neighbors = [];
  //     }  
  //     this.vert[i].neighbors.push(fromNode);
  //   }
  // }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //loop over neighbors
  //check if they contain the arguments
  //delete edges
  var temp= [];
  for (var i = 0; i < this.neighbors.length; i++) {
    if ((this.neighbors[i][0] === fromNode && this.neighbors[i][1]===toNode) || 
      (this.neighbors[i][0] === toNode && this.neighbors[i][1]=== fromNode)){
      //this.neighbors.splice(i,1);
      console.log(this.neighbors)
    }else{
      temp.push(this.neighbors[i]);
    }
  }
  this.neighbors= temp.splice();
        console.log(this.neighbors)

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.vert.forEach(function(node){
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
    Linear time complexity O(n)
 */


