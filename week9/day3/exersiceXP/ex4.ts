function getFirstElement(arr: (number | string)[]): string {
  // Assert that the first element is a string
  return arr[0] as string;
}

const mixedArray = [1, "two", 3];
console.log(getFirstElement(mixedArray)); 

const stringArray = ["apple", "banana"];
console.log(getFirstElement(stringArray)); 