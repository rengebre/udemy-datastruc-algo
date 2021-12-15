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
}

let list = new SinglyLinkedList();
console.log(list.unshift("Hello"));
console.log(list.unshift("Pre Hello"));
// list.push("Hello");
// list.push("there");
// console.log(list);
// console.log("SHIFT", list.shift())
// console.log(list);
// console.log("SHIFT", list.shift())
// console.log(list);