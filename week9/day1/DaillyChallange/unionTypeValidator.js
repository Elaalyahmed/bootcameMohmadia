// unionTypeValidator.ts
// The validator function
function validateUnionType(value, allowedTypes) {
    if (value === null && allowedTypes.indexOf("null") !== -1) {
        return true;
    }
    for (var _i = 0, allowedTypes_1 = allowedTypes; _i < allowedTypes_1.length; _i++) {
        var type = allowedTypes_1[_i];
        if (typeof value === type) {
            return true;
        }
    }
    return false;
}
// Example variables to test
var val1 = "Hello";
var val2 = 42;
var val3 = true;
var val4 = { name: "John" };
var val5 = null;
// Different allowed types
var allowed1 = ["string", "number"];
var allowed2 = ["boolean"];
var allowed3 = ["object", "string"];
var allowed4 = ["null"];
// Testing the validator
console.log("val1:", validateUnionType(val1, allowed1));
console.log("val2:", validateUnionType(val2, allowed1));
console.log("val3:", validateUnionType(val3, allowed1));
console.log("val3:", validateUnionType(val3, allowed2));
console.log("val4:", validateUnionType(val4, allowed3));
console.log("val5:", validateUnionType(val5, allowed3));
console.log("val5:", validateUnionType(val5, allowed4));
