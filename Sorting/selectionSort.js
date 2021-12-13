const { swap } = require('./helpers');

const selectionSort = function(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min > i) swap(arr, i, min);
  }

  return arr;
};

console.log(selectionSort([1, 9, 3, 14, 56, 10]));