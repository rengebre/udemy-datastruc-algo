class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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

    this.tail = newNode;
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return;
    let node = this.head;
    let prevNode = node;

    while (node.next) {
      prevNode = node;
      node = node.next;
    }

    prevNode.next = null;
    this.tail = prevNode;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return node;
  }

  shift() {
    if (!this.head) return;
    let prevHead = this.head;
    this.head = prevHead.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return prevHead;
  }

  unshift(val) {
    let newHead = new Node(val);
    newHead.next = this.head;
    if (!this.head) this.tail = newHead;
    this.head = newHead;
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;
    let node = this.head;
    let count = 0;
    while (count !== index) {
      count++;
      node = node.next;
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
    if (index > this.length || index < 0) return;
    else if (index === 0) this.unshift(val);
    else if (index === this.length) this.push(val);
    else {
      let newNode = new Node(val);
      let prev = this.get(index - 1);
      let current = prev.next;

      prev.next = newNode;
      newNode.next = current;
      this.length += 1;
    }
    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prev = this.get(index - 1);
    let removed = prev.next;

    prev.next = removed.next;
    // curr.next = null;
    this.length -= 1;
    return removed;
  }

  reverse() {
    let node = this.head;
    let prev = null;
    this.head = this.tail;
    this.tail = node;

    while (node) {
      let temp = node.next;
      node.next = prev;
      prev = node;
      node = temp;
    }

    return this;
  }
}

let list = new SinglyLinkedList();
list.unshift("Hello");
list.unshift("Pre Hello");
list.insert(2, 8);
list.insert(0, 'unshiiiiffttttt');
list.insert(2, "middle");

console.log(list.reverse());
console.log("******** list ********")
let node = list.head;
while (node) {
  console.log(node)
  node = node.next;
}

console.log("******** reversed ********")
list.reverse();
node = list.head;
while (node) {
  console.log(node)
  node = node.next;
}


// list.push("there");
// console.log(list);
// console.log("SHIFT", list.shift())
// console.log(list);
// console.log("SHIFT", list.shift())
// console.log(list);