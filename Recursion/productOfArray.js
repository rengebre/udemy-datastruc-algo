const productOfArray = function(arr) {
  let arrLength = arr.length;
  if (arrLength < 1) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));