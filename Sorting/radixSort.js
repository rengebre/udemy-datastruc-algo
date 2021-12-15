const getDigit = function(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const digitCount = function(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = function(arr) {
  let max = 0;
  for (const elem of arr) {
    max = Math.max(max, digitCount(elem));
  }

  return max;
}

// My initial method prior to watching the video. His implementation is simpler to navigate but mine is not wrong

// const radixSort = function(arr) {
//   let newArr = [...arr];
//   let unsorted = true;
//   let bucket = {};
//   let place = 0;
//   let maxDigit = mostDigits(arr);

//   while (unsorted) {
//     for (let i = 0; i < newArr.length; i++) {
//       let digit = getDigit(newArr[i], place);
//       if (bucket[digit]) {
//         bucket[digit].push(newArr[i]);
//       } else {
//         bucket[digit] = [newArr[i]];
//       }
//     }

//     newArr = [];

//     for (let i = 0; i < 10; i++) {
//       if (!bucket[i]) continue;
//       while (bucket[i].length) {
//         newArr.push(bucket[i].shift());
//       }
//     }

//     if (place === maxDigit - 1) unsorted = false;
//     place++;
//   }
//   return newArr;
// }

const radixSort = function(arr) {
  let maxDigitCount = mostDigits(arr);
  for (let i = 0; i < maxDigitCount; i++) {
    let bucket = Array.from({length: 10}, () => []);
    for (let j = 0; j < arr.length; j++) {
      bucket[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...bucket);
  }
  return arr;
};

const randomArray = function(length) {
  let retArr = [];
  for (let i = 0; i < length; i++) {
    retArr.push(Math.floor(Math.random()*10000));
  }
  return retArr;
}

let array = randomArray(20);
console.log(array);
console.log(radixSort(array));
