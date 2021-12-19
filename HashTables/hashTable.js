class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      total = (total * WEIRD_PRIME + char.charCodeAt(0) - 96) % this.keyMap.length;
    }
  
    return total;
  };

  set(key, value) {
    const index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    } 

    for (const elem of this.keyMap[index]) {
      if (elem[0] === key) {
        elem[1] = value;
        return "Updated";
      }
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);

    if (this.keyMap[index]) {
      for (const pair of this.keyMap[index]) {
        if (pair[0] === key) return pair[1];
      }
    }
    
    return;
  }

  flatten(arr, index) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        if (!Array.isArray(arr[i])) return [arr[index]];
        tempArr = tempArr.concat(this.flatten(arr[i], index));
      }
    }
    
    return tempArr;
  }

  keys() {    
    return this.flatten(this.keyMap, 0);
  }

  values() {
    return this.flatten(this.keyMap, 1);
  }
}

let hash = new HashTable(4);
hash.set("hello world", "goodbye!!");
hash.set("dogs", "are cool");
hash.set("cats", "are fine");
hash.set("i love", "pizza");
console.log(hash.set("cats", "are better than cool"));
console.log(hash.keyMap);
// console.log("keys", hash.keys());
// console.log("values", hash.values());
