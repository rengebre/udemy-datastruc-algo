// walk right and left pointers creating a object of keys then return the array of keys length
const findLongestSubstring = function(string) {
  let obj = {};
  let count = 0;
  let maxCount = 0;
  let left = 0;
  let right = 0;

  while (right < string.length) {
    if (obj[string[right]]) {
      delete obj[string[left]];
      left++;
      count--;
    } else {
      obj[string[right]] = 1;
      right++
      count++
    }
    maxCount = count > maxCount ? count : maxCount;
  }

  return maxCount;
}

// ************ 
// Colt steele solution slightly better as mine isn't O(n^2), but it also doesn't go as linearly through it as this
// solution
// ************

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;
 
//   for (let i = 0; i < str.length; i++) {
//     console.log(seen)
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));