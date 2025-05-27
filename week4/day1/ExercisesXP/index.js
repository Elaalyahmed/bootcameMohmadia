//  Exercise 1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     console.log(`inside the funcOne function ${a}`);
// }
// funcOne()
// Onput : inside the funcOne function 3
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     console.log(`inside the funcThree function ${a}`);
// }
// funcThree()
// funcTwo()
// funcThree()
// Onput: inside the funcThree function 0
//       inside the funcThree function 5

// Exercise 2
// Arrow function version
// const winBattle = () => true;

// // Ternary operator to assign experience points
// const experiencePoints = winBattle() ? 10 : 1;

// // Log the result
// console.log(experiencePoints);

// // Exercise 3
// const isString = value => typeof value === "string";
// console.log(isString('hello'))
// console.log(isString(1, 2, 4, 0))
// // Exercise 4

// const add = (a, b) => a + b;
// console.log(add(5, 3))

// // Exercise 5
// // Function Declaration
// function toGrams1(kg) {
//     return kg * 1000;
// }
// console.log(toGrams1(5)); // 5000

// // Function Expression
// const toGrams2 = function (kg) {
//     return kg * 1000;
// };
// console.log(toGrams2(3)); // 3000

// Function declarations are hoisted, while function expressions are not.

// One-line Arrow Function
// const toGrams3 = kg => kg * 1000;
// console.log(toGrams3(7)); // 7000

// Exercise 6 
// function argument(children, partner, location, job) {

//     return `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
// }
// console.log(argument(3, 'Alex', 'Canada', 'Web Developer'))

//  Exercise 8
function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
        const message = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, and ${ing3}.`;
        console.log(message);
    }
    addIngredients('apple', 'banana', 'mint');
}
makeJuice('large');








