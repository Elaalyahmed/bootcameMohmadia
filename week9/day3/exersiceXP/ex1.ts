type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

// Intersection type combining Person and Address
type PersonWithAddress = Person & Address;

// Create a variable of this type
const personWithAddress: PersonWithAddress = {
  name: "Alice",
  age: 30,
  street: "123 Main St",
  city: "New York"
};

console.log(personWithAddress);