const collectStrings = function(obj) {
  let retArr = [];

  for (const key in obj) {
    let val = obj[key];
    if (!Array.isArray(val) && typeof val === 'object') {
      retArr = retArr.concat(collectStrings(val));
    } else if (typeof val === 'string') {
      retArr.push(val);
    }
  }

  return retArr;
};

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])