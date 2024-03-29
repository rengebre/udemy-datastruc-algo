const { swap } = require('./helpers');

const bubbleSort = function(arr) {
  let didSwap;
  for (let i = arr.length; i > 0; i--) {
    didSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
        didSwap = true;
      }
    };
    if (!didSwap) break;
  };

  return arr;
}

console.log(bubbleSort([-3, 45, 12, 39, 37, 8, 88]));