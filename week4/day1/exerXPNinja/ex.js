// Exercise 1 
// function mergeWords(word) {
//   let words = [];
//   function next(nextWord) {
//     if (nextWord === undefined) return words.join(' ');
//     words.push(nextWord);
//     return next;
//   }
//   return next(word);
// }
// console.log(mergeWords('Hello')());
// console.log(mergeWords('There')('is')('no')('spoon.')()); 

const mergeWords = str => next => next === undefined ? str : mergeWords(`${str} ${next}`);
console.log(mergeWords('Hello')()); 
console.log(mergeWords('There')('is')('no')('spoon.')());
