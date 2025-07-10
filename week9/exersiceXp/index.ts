// // Simple TypeScript program that logs "Hello, World!"
// console.log("Hello, World!");
//  Exercise 2: Type Annotations
// Define variables with type annotations
{
    const name: string = "John Doe";  // Works because it's scoped
    const age: number = 30;
    console.log(`Name: ${name}, Age: ${age}`);
}

// Exercise 3: Union Types

let id: string | number;

id = 123;
console.log(`ID as number: ${id}`);

id = "ABC456";
console.log(`ID as string: ${id}`);

// Exercise 4: Control Flow with if...else
function checkNumber(num: number): string {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checkNumber(10));   
console.log(checkNumber(-5));   
console.log(checkNumber(0));   

//  Exercise 5: Tuple Types
function getDetails(name: string, age: number): [string, number, string] {
    const greeting = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting];
}

const details = getDetails("Alice", 25);
console.log(details); 

// Exercise 6: Object Type Annotations
type Person = {
    name: string;
    age: number;
};

function createPerson(name: string, age: number): Person {
    return { name, age };
}

const person = createPerson("Bob", 42);
console.log(person); 

// Exercise 9: Function Overloading with Default Parameters

function greet(): string;
function greet(name: string): string;

function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello, guest!";
    }
}

console.log(greet());           
console.log(greet("TypeScript")); 