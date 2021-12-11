const isPalindrome = function(str) {
  const reverse = function(str) {
    if (str.length === 0) return "";
    return reverse(str.slice(1)) + str[0];
  };

  const reverseStr = reverse(str);

  return str === reverseStr;
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false