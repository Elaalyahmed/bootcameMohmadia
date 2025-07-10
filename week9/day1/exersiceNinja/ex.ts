// Exercise 1: Conditional Types
type MappedType<T> = T extends number ? number : T extends string ? number : never;

function mapType<T extends number | string>(value: T): MappedType<T> {
  if (typeof value === "number") {
    return (value * value) as MappedType<T>;
  } else {
    return value.length as MappedType<T>;
  }
}

console.log(mapType(5));         
console.log(mapType("hello"));   

// Exercise 2: keyof and Lookup Types
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = {
  id: 1,
  name: "Sara",
  active: true
};

console.log(getProperty(user, "id"));     
console.log(getProperty(user, "name"));   
console.log(getProperty(user, "active")); 

// Exercise 3: Interfaces with Numeric Properties
interface HasNumericProperty {
  [key: string]: number;
}

function multiplyProperty<T extends HasNumericProperty>(
  obj: T,
  key: keyof T,
  factor: number
): number {
  const value = obj[key];
  return value * factor;
}

const stats = {
  strength: 10,
  speed: 7,
  stamina: 5
};

console.log(multiplyProperty(stats, "strength", 2));
console.log(multiplyProperty(stats, "speed", 3));   
