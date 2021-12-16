class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;  
    } else {
      this.tail.next = newNode;
    }

    newNode.prev = this.tail;
    this.tail = newNode;
    this.length += 1;
    
    return newNode;
  }

  pop() {
    if (this.length === 0) return;
    let removed = this.tail;
    
    if (this.length === 1) {
      this.head = null;
    } else {
      removed.prev.next = null;
    }

    this.tail = removed.prev;
    removed.prev = null;
    this.length -= 1;

    return removed;
  }

  shift() {
    if (this.length === 0) return;
    let removed = this.head;

    if (this.length === 1) {
      this.tail = null;
    } else {
      removed.next.prev = null;
    }

    this.head = removed.next;
    removed.next = null;
    this.length -= 1;

    return removed;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length += 1;
    return newNode;    
  }

  get(index) {
    if (index < 0 || index >= this.length) return;

    let mid = Math.floor(this.length / 2);
    let node;

    // function to loop through list either forwards/backwards depending on index
    const loop = (node, prop, isForward, count) => {
      while (count !== index) {
        count += isForward ? 1 : -1;
        node = node[prop];
      }
      return node;
    }

    if (index - mid >= 0) {
      node = this.tail;
      node = loop(node, "prev", false, this.length - 1);
    } else {
      node = this.head;
      node = loop(node, "next", true, 0);
    }

    return node;    
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) return;
    node.val = val;
    return node;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let curr = this.get(index);
    newNode.prev = curr.prev;
    newNode.next = curr;
    curr.prev.next = newNode;
    curr.prev = newNode;
    this.length += 1;
    return newNode;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let node = this.get(index);
    if (!node) return;

    let prev = node.prev;
    let next = node.next;

    prev.next = next;
    next.prev = prev;
    node.next = node.prev = null;

    this.length -= 1;
    return node;
  }

  reverse() {
    let node = this.head;
    let prev = null;
    let next = node.next;
    this.head = this.tail;
    this.tail = node;

    while (node) {

      let tempNext = node.next;
      node.next = prev;
      node.prev = next;

      prev = node;
      next = !tempNext ? null : tempNext.next;
      node = tempNext;
    }

    return this;
  }
}

let list = new DoublyLinkedList();
list.push(5);
list.push(10);
list.push(15);


// let node = list.head;
// for (let i = 0; i < list.length; i++) {
//   console.log(node);
//   node = node.next;
// }

console.log(list.reverse());

// node = list.head;
// for (let i = 0; i < list.length; i++) {
//   console.log(node);
//   node = node.next;
// }