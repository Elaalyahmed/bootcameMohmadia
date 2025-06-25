// 1st Function
function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every(word => typeof word === 'string')) {
      resolve(words.map(word => word.toUpperCase()));
    } else {
      reject("Error: Not all items in the array are strings.");
    }
  });
}

// 2nd Function
function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject("Error: Array length must be greater than 4.");
    }
  });
}

// Tests
makeAllCaps([1, "pear", "banana"])
  .then(sortWords)
  .then(console.log)
  .catch(console.log);

makeAllCaps(["apple", "pear", "banana"])
  .then(sortWords)
  .then(console.log)
  .catch(console.log);

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(sortWords)
  .then(console.log) // ["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch(console.log);
