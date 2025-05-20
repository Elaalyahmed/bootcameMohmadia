const sentence = "The movie is not that bad, I like it";
const wordNot  = sentence.indexOf("not")
console.log(wordNot)
const wordBad = sentence.indexOf("bad")
console.log(wordBad)

let result;
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  result = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
} else {
  result = sentence;
}
console.log(result); 