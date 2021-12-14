const merge = function(arr1, arr2) {
  let i = 0;
  let j = 0;
  let retArr = [];
  while (true) {
    if (i >= arr1.length) {
      retArr = retArr.concat(arr2.slice(j));
      break;
    }

    if (j >= arr2.length) {
      retArr = retArr.concat(arr1.slice(i));
      break;
    }

    if (arr1[i] <= arr2[j]) {
      retArr.push(arr1[i]);
      i++;
    } else {
      retArr.push(arr2[j]);
      j++;
    }
  }

  return retArr;
}


const mergeSort = function(arr) {
  if (arr.length <= 1) return arr;
  
  let mid = Math.floor(arr.length  / 2);
  let first = mergeSort(arr.slice(0, mid));
  let second = mergeSort(arr.slice(mid));

  return merge(first, second);
};

console.log(mergeSort([1, 10, 17, 8, 4, 9, 100, 80, 3, 5]));