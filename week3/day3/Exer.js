// function displayNumbersDivisible() {
//   let sum = 0; 
//   for (let i = 0; i < 501; i++) {
//     if (i % 23 === 0) {
//       console.log(i);     
//       sum += i;         
//     }
//   }
//   console.log('Sum:', sum); 
// }
// displayNumbersDivisible();

// Bonus: Add a parameter divisor to the function.

// function displayNumbersDivisible(divisor) 
// {
//     console.log(divisor)
// }
// displayNumbersDivisible(3) 
// displayNumbersDivisible(45) 

// //  Exercise 2
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } ;
// // Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// let shoppingList = ["banana", "orange", "apple"];
// function myBill() {
//   let total = 0;
//   for (let item of shoppingList) {
//     if (item in stock && stock[item] > 0) {
//       total += prices[item];
//       stock[item]--; 
//     }
//   }
//   return total;
// }
// console.log("Total Bill: $" + myBill());
// console.log("Updated Stock:", stock);

// Exercise 3
// function changeEnough(itemPrice, amountOfChange) {
//   const [quarters, dimes, nickels, pennies] = amountOfChange;
//   const totalChange = 
//     quarters * 0.25 + 
//     dimes * 0.10 + 
//     nickels * 0.05 + 
//     pennies * 0.01;
//   return totalChange >= itemPrice;
// }
// console.log(changeEnough(4.25,[25,20,5,0]))
// console.log(changeEnough(10.00, [20, 12, 0, 0]));
// console.log(changeEnough(0.75, [2, 0, 0, 0]));
// console.log(changeEnough(0.50, [2, 0, 0, 0]));

// Exercise 4
function hotelCost() {
  let nights = prompt("How many nights will you stay?");
  while (isNaN(nights) || nights === "" || nights === null) {
    nights = prompt("Please enter a valid number of nights:");
 }
  return nights * 140;
}
console.log("Total cost: $" + hotelCost());








