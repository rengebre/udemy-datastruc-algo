const stringifyNumbers = function(obj) {
  let newObj = {};

  for (const key in obj) {
    const val = obj[key];
    if (!Array.isArray(val) && typeof val === 'object') {
      newObj[key] = stringifyNumbers(val); 
    } else if (typeof val === 'number') {
      newObj[key] = val.toString();
    } else {
      newObj[key] = val;
    }
  }

  return newObj;
};


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));


/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/