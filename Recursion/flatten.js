// flatten a deep array
const flatten = function(arr) {
  let newArr = [];

  for (const elem of arr) {
    if (Array.isArray(elem)) {
      newArr = newArr.concat(flatten(elem));
    } else {
      newArr.push(elem);
    }
  }

  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3