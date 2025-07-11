// Corrected version with proper constructor function handling
function castToType<T>(value: any, constructorFn: (value: any) => T): T {
    return constructorFn(value);
}

// Example usage with proper conversion functions
const stringValue = "123";
const numberValue = castToType<number>(stringValue, Number);
console.log(typeof numberValue, numberValue); // "number 123"

const truthyString = "true";
const booleanValue = castToType<boolean>(truthyString, (val) => val === "true");
console.log(typeof booleanValue, booleanValue); // "boolean true"

// Alternative approach using constructor functions properly
class TypedConstructor {
    static fromString<T>(value: string, constructor: new (value: any) => T): T {
        return new constructor(value);
    }
}

const numFromString = TypedConstructor.fromString("42", Number);
console.log(typeof numFromString, numFromString); // "number 42"