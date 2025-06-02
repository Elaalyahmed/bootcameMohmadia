// Exersice1
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10`);
    } else {
      reject(`${num} is greater than 10`);
    }
  });
}
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));
  // Exersice2
  const delayedSuccess = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000); 
});
delayedSuccess.then((message) => {
  console.log(message); 
});
// Exersice3
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
const resolvedPromise = Promise.resolve(3);
resolvedPromise.then((value) => {
  console.log(value); 
});
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const rejectedPromise = Promise.reject("Boo!");
rejectedPromise.catch((error) => {
  console.error(error); 
});


