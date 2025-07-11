type person = {
  name: string;
  age: number;
};

type Job = {
  position: 'Manager' | 'Developer';
  department: string;
};

type Employee = person & Job;

function describeEmployee(emp: Employee): string {
  if (emp.position === 'Manager') {
    return `${emp.name} is a Manager in the ${emp.department} department`;
  } else {
    return `${emp.name} is a Developer in the ${emp.department} department`;
  }
}

// Test cases
const manager: Employee = {
  name: "Bob",
  age: 45,
  position: "Manager",
  department: "IT"
};

const developer: Employee = {
  name: "Alice",
  age: 30,
  position: "Developer",
  department: "Engineering"
};

console.log(describeEmployee(manager)); 
console.log(describeEmployee(developer)); 
