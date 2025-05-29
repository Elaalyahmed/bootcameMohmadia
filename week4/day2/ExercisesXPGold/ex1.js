// Exercise 1
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
// onput
// [2 , 4 , 6]

// Exersice 2

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
// onput
// [1, 2, 0, 1, 2, 3]

// Exersice4
// const array = [[1],[2],[3],[[[4]]],[[[5]]]];
// const result = array.map(item => {
//   if (Array.isArray(item) && item.length === 1 && Array.isArray(item[0]) && Array.isArray(item[0][0])) {
//     return item.flat(2);
//   }
//   return item.flat();
// });
// console.log(result);  

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]
const concate = greeting.flat().join(' ')
console.log(concate)
// Hello young grasshopper! you are learning fast!

const result = greeting.map(item => item.join(" "))
console.log(result)
// [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const relt = trapped.flat(Infinity);
console.log(relt); 




