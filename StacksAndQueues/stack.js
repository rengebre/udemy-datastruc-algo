class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.last = newNode;
    } else {
      newNode.next = this.first;
    }

    this.first = newNode;    
    
    return ++this.size;
  }

  pop() {
    if (!this.size === 0) return null;
    let popped = this.first;
    if (this.size === 1) {
      this.last = null;
    }

    this.first = popped.next;
    popped.next = null;
    this.size -= 1;

    return popped.val;
  }
}

let stack = new Stack();
// stack.push(42);
// stack.push(8);
// stack.push(14);
stack.push("Sophie");
// stack.push("Katie");

console.log(stack.pop());

console.log(stack);