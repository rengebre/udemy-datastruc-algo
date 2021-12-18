class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }

    this.last = newNode;
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    let popped = this.first;
    if (this.size === 1) {
      this.last = null;
    }

    this.first = popped.next;
    this.size--;
    return popped.val;
  }
}

module.exports = { Queue };
// let queue = new Queue();
// queue.enqueue("First");
// // console.log(queue)
// queue.enqueue("Second");
// // console.log(queue)
// queue.enqueue("Third");
// // console.log(queue)

// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())