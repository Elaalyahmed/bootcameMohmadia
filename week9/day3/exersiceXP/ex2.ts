function describeValue(value: number | string): string {
  if (typeof value === 'number') {
    return "This is a number";
  } else {
    return "This is a string";
  }
}

// Test cases
console.log(describeValue(42)); 
console.log(describeValue("hello")); 