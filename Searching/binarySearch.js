const binarySearch = function(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  
  while (start <= end) {
    let index = Math.floor(((end + start) / 2));
    if (arr[index] === val) {
      return index;
    } else if (arr[index] < val) {
      start = index + 1;
    } else {
      end = index - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));