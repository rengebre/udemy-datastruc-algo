const maxSubarraySum = function(array, size) {
  if (size > array.length) {
    return null
  }
  
  let tempSum = 0;

  for (let i = 0; i < size; i++) {
    tempSum += array[i];
  }

  let maxSum = tempSum;

  for (let i = size; i < array.length; i++) {
    tempSum = tempSum + array[i] - array[i - size];

    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}