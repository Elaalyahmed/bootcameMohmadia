interface StringConvertible {
  toString(): string;
}

function formatInput<T extends StringConvertible>(input: T): string {
  // Call toString() instead of type asserting
  return `Formatted: ${input.toString().toUpperCase()}`;
}

// Test cases
console.log(formatInput("hello")); // "Formatted: HELLO"
console.log(formatInput(42)); // "Formatted: 42"
console.log(formatInput(true)); // "Formatted: TRUE"

const obj = {
  toString() { return "custom object"; }
};
console.log(formatInput(obj)); // "Formatted: CUSTOM OBJECT"