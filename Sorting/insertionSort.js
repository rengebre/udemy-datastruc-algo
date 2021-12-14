const { swap } = require('./helpers');

const insertionSort = function(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      swap(arr, j + 1, j);
    }
  }

  return arr;
};

console.log(insertionSort([2, 6, 4, 1, 9, 7, 18]));