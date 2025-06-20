// Part I - Review about arrays
// Write code to remove “Greg” from the people array.
const people = ["Greg", "Mary", "Devon", "James"];
people.shift()
// Write code to replace “James” to “Jason”.
people.splice(3, 1,'Jason')
console.log(people)
// Write code to add your name to the end of the people array.
people.push('ahmed')
console.log(people)
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log( people.indexOf('Mary'))
// Write code to make a copy of the people array using the slice method.
console.log(people.slice(1,3))
// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf(-1 , 'Foo'))
console.log(people)
// Create a variable called last which value is the last element of the array.
let last = ["Greg", "Mary", "Devon", "James"];
console.log(last.length)
// Part II - Loops

// Using a loop, iterate through the people array and console.log each person.
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

for (let i = 0; i< people.length ; i++ ){
    console.log(people[i])
    if (people[i] === "Devon")
        break
}
//  Exercise 2 
const colors = [ 'red' , 'black', 'yellow', 'blue','orange']
for (let i = 0; i<colors.length ; i++){
     console.log(`My #${i + 1} choice is ${colors[i]}`);

}
// Exercise 3 
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
const user = prompt("Enter a number:");
const num = Number(input);
console.log(typeof num); 
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
let number;
      do {
        const input = prompt("Enter a number:");
        number = Number(input);
      } while (isNaN(number) || number < 10);
      console.log("You number is valid:", number);

// Exercise 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// Console.log the number of floors in the building.
console.log(building.numberOfAptByFloor)
// Console.log how many apartments are on the floors 1 and 3.
console.log(
  building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor
);
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.dan)
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
  console.log("Dan's rent has been increased to 1200.");
} else {
  console.log("Dan's rent remains the same.");
}
//  Exercise 5 
const family = {
    dad: "mouad",
    mom: "Jihan",
    kids: 4,
    pet: "dog",
    city: "AGADIR"
};
// Using a for in loop, console.log the keys of the object.
const keys = []
for ( let key in family){
    keys.push(keys)
    console.log(key)
}
// Using a for in loop, console.log the values of the object.
for (let key in family) {
    console.log(key + ':' + family[key])
}
// Exercise 6 
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
};

// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
for (let key in details) {
    console.log(key + ' ' + details[key] + ' ');

}
// Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const secretName = names
    .map(name => name[0]).sort().join('');
console.log(secretName);



