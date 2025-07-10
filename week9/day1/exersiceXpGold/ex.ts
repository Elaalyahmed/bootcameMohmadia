// Exercise 1: Union Types

function processValue(value: string | number): string {
  if (typeof value === "number") {
    return `$${value.toFixed(2)}`;
  } else {
    return value.split('').reverse().join('');
  }
}

console.log(processValue(100));          
console.log(processValue("hello"));      

// Exercise 2: Array Type Annotations
function sumNumbersInArray(arr: (number | string)[]): number {
  let sum = 0;
  for (const item of arr) {
    if (typeof item === "number") {
      sum += item;
    }
  }
  return sum;
}

console.log(sumNumbersInArray([1, "2", 3, "a", 4])); // Output: 8
console.log(sumNumbersInArray(["10", "test"]));     // Output: 0
console.log(sumNumbersInArray([5, 10, 15]));         // Output: 30
// Exercise 3: Type Aliases

type AdvancedUser = {
  name: string;
  age: number;
  address?: string;
};

function introduceAdvancedUser(user: AdvancedUser): string {
  let message = `Hi, I'm ${user.name}, ${user.age} years old.`;
  if (user.address) {
    message += ` I live in ${user.address}.`;
  }
  return message;
}

console.log(introduceAdvancedUser({ name: "Ali", age: 25 }));
console.log(introduceAdvancedUser({ name: "Sara", age: 30, address: "Rabat" }));

// Exercise 4: Optional Parameters
function welcomeUser(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(welcomeUser("Zineb"));              
console.log(welcomeUser("Mohammed", "Hi"));     
