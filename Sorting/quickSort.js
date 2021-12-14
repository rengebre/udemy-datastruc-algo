const { swap } = require('./helpers')
// choose the first element as the pivot
// loop through array
// if element less than pivot, switch with pivotIndex + count position
// at end of loop, swap the pivot val with the final less than val
const pivot = function(arr, start=0, end=arr.length - 1) {
  let val = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < val) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }

    if (i === end) swap(arr, start, swapIndex);
  }

  return swapIndex; 
};


const quickSort = function(arr, start = 0, end = arr.length - 1) {
  if (end - start <= 1) return;
  let index = pivot(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
}

array = [5, 2, 1, 8, 4, 7, 6, 3]

console.log("unsorted", array);
quickSort(array);
console.log("sorted", array);