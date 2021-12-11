// go through the object keys checking their values
// check if their value is an object (assuming there will be no arrays or null values)
// if object, call recursively
// if not check if it is a number && even
// if even, add to the sum
// if not, ignore
// return sum
const nestedEvenSum = function(obj) {
  const keys = Object.keys(obj);
  let sum = 0;

  for (const key of keys) {
    const value = obj[key];
    if (typeof value === 'object') {
      sum += nestedEvenSum(value);
    } else if (typeof value === 'number' && value % 2 === 0) {
      sum += value;
    }
  }

  return sum;
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10