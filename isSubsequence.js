// create 2 pointers
// check first char of each string
// increment secondPointer until you come across this letter
// increment first pointer
// increment second pointer until you find this letter

const isSubsequence = function(subString, checkString) {
  if (subString.length > checkString.length) {
    return false;
  }


  let subCharCount = 0;
  let subCharMax = subString.length - 1;
  for (const char of checkString) {
    
    if (char === subString[subCharCount]) {
      subCharCount++
    }

    if (subCharCount === subCharMax) {
      return true;
    }
  }

  return false;
}

