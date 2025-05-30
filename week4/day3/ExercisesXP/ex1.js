// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }
// const {name, location: {country, city, coordinates: [lat, lng]}} = person;
// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// onput
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
//  Exercise 2
// function displayStudentInfo(ObjUser) {
//     const {first,last} = ObjUser
//     return `Your full name is ${first} ${last}`
// }
// displayStudentInfo({ first: 'Elie', last: 'Schoppik' });
// console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' })
// )
//  Exercise 3
// const users = { user1: 18273, user2: 92833, user3: 90315 };
// let text = Object.entries(users)
// console.log(text)

// const updatedUsers = text.map(([username, id]) => [username, id * 2]);
// console.log(updatedUsers);

// Exercise 4
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);
// // onput
// object
// Exercise 5 
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// }
//  Exercise 6

// console.log([2] === [2]); // false

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)//4
// console.log(object3.number)//4
// console.log(object4.number)//5

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;   
    this.color = color;
  }
  getDescription() {
    return `${this.name} is a ${this.color} ${this.type}.`;
  }
}
const animal1 = new Animal("Buddy", "dog", "brown");
console.log(animal1.getDescription()); 

// Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

// Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound(sound) {
    return `The ${this.color} ${this.type} named ${this.name} makes this sound: ${sound}`;
  }
}
const dog = new Mammal("Buddy", "dog", "brown");
console.log(dog.sound("woof")); 
const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo")); 






