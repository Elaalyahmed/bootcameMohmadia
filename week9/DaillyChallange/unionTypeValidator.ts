// unionTypeValidator.ts

// The validator function
function validateUnionType(value: any, allowedTypes: string[]): boolean {
  if (value === null && allowedTypes.indexOf("null") !== -1
) {
    return true;
  }

  for (let type of allowedTypes) {
    if (typeof value === type) {
      return true;
    }
  }

  return false;
}

// Example variables to test
const val1 = "Hello";
const val2 = 42;
const val3 = true;
const val4 = { name: "John" };
const val5 = null;

// Different allowed types
const allowed1 = ["string", "number"];
const allowed2 = ["boolean"];
const allowed3 = ["object", "string"];
const allowed4 = ["null"];

// Testing the validator
console.log("val1:", validateUnionType(val1, allowed1)); 
console.log("val2:", validateUnionType(val2, allowed1)); 
console.log("val3:", validateUnionType(val3, allowed1)); 
console.log("val3:", validateUnionType(val3, allowed2)); 
console.log("val4:", validateUnionType(val4, allowed3)); 
console.log("val5:", validateUnionType(val5, allowed3)); 
console.log("val5:", validateUnionType(val5, allowed4)); 
