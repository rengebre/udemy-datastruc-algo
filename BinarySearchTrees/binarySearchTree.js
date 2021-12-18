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
      return newNode;
    }

    let node = this.root;

    while (node.value !== value) {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
          return newNode;
        }
        node = node.left;
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
          return newNode;
        }  
        node = node.right;
      }
    }  

    return undefined;
  }

  insertR(value) {
    let newNode = new Node(value);
    let node = this.root;

    if (!node) {
      this.root = newNode;
      return newNode;
    }


    const insertNode = function(node) {
      let retNode;
      if (value > node.value) {
        if (!node.right) node.right = newNode;
        else retNode = insertNode(node.right);
      } else if (value < node.value) {
        if (!node.left) node.left = newNode;
        else retNode = insertNode(node.left);
      }

      return retNode;
    }

    return inserNode(node);
  }

  find(value) {
    let node = this.root;
    while(node) {
      if (value === node.value) return node;
      if (value > node.value) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
    return;
  }

  findR(value) {
    const findNode = function(node) {
      if (!node) return;
      if (node.value === value) return node;

      return value > node.value ? findNode(node.right) : findNode(node.left);
    }

    return findNode(this.root);
  }
}

const printBranch = function(node) {
  if (!node) return;
  console.log((node.value === 69 ? "nice" : ""), node);
  printBranch(node.left);
  printBranch(node.right);
};

let bts = new BinarySearchTree();
bts.insert(50);
bts.insert(45);
bts.insert(10);
bts.insert(35);
bts.insert(69);
bts.insert(55);

console.log(bts.findR(45));
console.log(bts.findR(14));
// let node = bts.root;

// printBranch(node);