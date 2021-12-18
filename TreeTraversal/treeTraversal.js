const { Queue } = require("../StacksAndQueues/queue");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let node = this.root;

    while (node.value !== value) {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
          return this;
        }
        node = node.left;
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
          return this;
        }  
        node = node.right;
      }
    }  

    return undefined;
  }

  bfsPrint() {
    let q = new Queue();
    let node = this.root
    let retArr = []

    if (node) q.enqueue(node);

    while(q.size) {
      node = q.dequeue();
      retArr.push(node.value);
      if (node.left) q.enqueue(node.left);
      if (node.right) q.enqueue(node.right);
    }

    return retArr;
  }

  dfsPreOrder() {
    let retArr = [];

    const traverse = function(node) {
      retArr.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    
    traverse(this.root);

    return retArr;
  }

  dfsPostOrder() {
    let retArr = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      retArr.push(node.value);
    }
    
    traverse(this.root);

    return retArr;
  }

  dfsInOrder() {
    let retArr = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      retArr.push(node.value);
      if (node.right) traverse(node.right);
    }
    
    traverse(this.root);

    return retArr;
  }
}

//            10
//         6     15
//       3   8      20

const printBranch = function(node) {
  if (!node) return;
  console.log((node.value === 69 ? "nice" : ""), node);
  printBranch(node.left);
  printBranch(node.right);
};

let bst = new BinarySearchTree();

bst.insert(10).insert(6).insert(8).insert(3).insert(15).insert(20);

console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.dfsInOrder());