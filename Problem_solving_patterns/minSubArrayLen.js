// we are going to walk through the array with 2 pointers
// if current value is < val walk right pointer up (increase array counter)
// if current value is > val walk left pointer up (decrease array counter)
// each iteration, check if the array length is < our current minimum array length && current value >= val

const minSubArrayLen = function(arr, val) {
  let lenCount = 1;
  let left = 0;
  let right = 0;
  let currVal = arr[0];
  let lenMin = arr.length + 1;

  if (currVal >= val) {
      return 1;
  }

  while (right < arr.length) {
      if (currVal < val) {
          right++;
          lenCount++;
          currVal += arr[right];
      } else {
          currVal -= arr[left] 
          left++;
          lenCount--;
      }

    if (currVal >= val && lenCount < lenMin) lenMin = lenCount;
  }

  return (lenMin > arr.length) ? 0 : lenMin;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
