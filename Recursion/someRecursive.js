const someRecursive = function(arr, cb) {
  if (arr.length === 0) return false;
  return cb(arr[0]) || someRecursive(arr.slice(1), cb);
};

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false