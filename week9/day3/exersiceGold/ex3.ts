function getArrayLength<T extends number | string>(arr: T[]): number {
    return arr.length;
}

// Example usage
const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];
const mixed = [1, "two", false]; // This would cause a type error

console.log(getArrayLength(numbers)); // 3
console.log(getArrayLength(strings)); // 3
// console.log(getArrayLength(mixed)); // Error: Type 'boolean' is not assignable to type 'string | number'