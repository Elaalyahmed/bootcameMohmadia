// Exercise 1
function isBlank(str) {
  return str.trim().length === 0;
}
console.log(isBlank(''));      // true
console.log(isBlank('abc'));   // false
// Exercise 2
function abbrevName(name) {
  const parts = name.split(" ");
  if (parts.length < 2) return name; 
  return `${parts[0]} ${parts[1][0]}.`;
  
}
console.log(abbrevName("Robin Singh")); 
// Exercise 3
function swapCase(str) {
  let result = "";
  for (let char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}
console.log(swapCase('The Quick Brown Fox')); 
// Exercise 4
function isOmnipresent(arr, val) {
  for (let subArr of arr) {
    if (!subArr.includes(val)) {
      return false;
    }
  }
  return true;
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); 
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); 





