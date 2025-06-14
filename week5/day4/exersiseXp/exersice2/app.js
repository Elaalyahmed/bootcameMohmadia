import { person  } from "./data.js";
console.log(person);
function printAverageAge(persons) {
    if (persons.length === 0) {
        console.log("No persons in the list");
        return;
    }

    const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
    const average = totalAge / persons.length;

    console.log("Average age:", average.toFixed(2));
}

printAverageAge(person);