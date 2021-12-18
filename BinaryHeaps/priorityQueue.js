const { swap } = require('../Sorting/helpers');

class Name {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let name = new Name(value, priority);
    this.values.push(name);
    let index = this.values.length - 1;

    function getParentIndex(index) {
      if (index < 1) return index;
      return Math.floor((index - 1) / 2);
    };

    let parentIndex = getParentIndex(index);

    while (this.values[index].priority < this.values[parentIndex].priority) {
      swap(this.values, index, parentIndex);
      index = parentIndex;
      parentIndex = getParentIndex(index);
    }

    return this;
  }

  dequeue() {
    if (!this.values.length) return;

    swap(this.values, 0, this.values.length - 1);
    let dequeued = this.values.pop();

    const bubbleDown = (index) => {
      if (this.values[index] === undefined) return;
      const leftIndex = (2 * index) + 1;
      const leftElem = this.values[leftIndex] ? this.values[leftIndex].priority : Infinity;
      const rightIndex = 2 * (index + 1);
      const rightElem = this.values[rightIndex] ? this.values[rightIndex].priority : Infinity;

      let nextIndex, nextName;
      if (rightElem < leftElem) {
        nextIndex = rightIndex;
        nextName = rightElem;
      } else {
        nextIndex = leftIndex;
        nextName = leftElem;
      }

      if (this.values[index].priority > nextName) {
        swap(this.values, index, nextIndex);
        bubbleDown(nextIndex);
      }
    };

    bubbleDown(0);

    return dequeued;
  }
}

let pq = new PriorityQueue();
pq.enqueue("Russell", 4)
  .enqueue("Katie", 2)
  .enqueue("Sophie", 1)
  .enqueue("Laura", 3)
  .enqueue("skeet", 12);

console.log(pq);

console.log(pq.dequeue());
console.log(pq);
console.log(pq.dequeue());
console.log(pq);
console.log(pq.dequeue());
console.log(pq);
console.log(pq.dequeue());
console.log(pq);