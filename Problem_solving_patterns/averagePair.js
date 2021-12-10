const averagePair = function(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let average = (array[start] + array[end]) / 2;

    if (average === target) {
      return true;
    } else if (average > target) {
      end--
    } else {
      start++
    }
  }

  return false
}