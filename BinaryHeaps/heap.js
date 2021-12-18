const { swap } = require('../Sorting/helpers');

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;

    function getParentIndex(index) {
      if (index < 1) return index;
      return Math.floor((index - 1) / 2);
    };

    let parentIndex = getParentIndex(index);

    while (this.values[index] > this.values[parentIndex]) {
      swap(this.values, index, parentIndex);
      index = parentIndex;
      parentIndex = getParentIndex(index);
    }

    return this;
  }

  extractMax() {
    if (!this.values.length) return;

    swap(this.values, 0, this.values.length - 1);
    let popped = this.values.pop();

    const bubbleDown = (index) => {
      if (this.values[index] === undefined) return;
      let leftIndex = (2 * index) + 1;
      let leftElem = this.values[leftIndex] || -Infinity;
      let rightIndex = 2 * (index + 1);
      let rightElem = this.values[rightIndex] || -Infinity;

      let nextIndex = rightElem > leftElem ? rightIndex : leftIndex;

      // will always return false if one of the comparison values is undefined
      if (this.values[index] < this.values[nextIndex]) {
        swap(this.values, index, nextIndex);
        bubbleDown(nextIndex);
      }
    };

    bubbleDown(0);

    return popped;
  }
}

let heap = new MaxBinaryHeap();

heap.insert(100).insert(14).insert(42).insert(50).insert(8).insert(99).insert(27).insert(82).insert(43);

console.log(heap);

console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
