// Exercise 1
function getPersonWithLargestBMI(p1, p2) {
  const bmi1 = p1.calcBMI();
  const bmi2 = p2.calcBMI();

  if (bmi1 > bmi2) {
    console.log(`${p1.fullName} has the largest BMI: ${bmi1.toFixed(2)}`);
  } else if (bmi2 > bmi1) {
    console.log(`${p2.fullName} has the largest BMI: ${bmi2.toFixed(2)}`);
  } else {
    console.log(`Both ${p1.fullName} and ${p2.fullName} have the same BMI: ${bmi1.toFixed(2)}`);
  }
}

getPersonWithLargestBMI(person1, person2);
// Exercise 2
function calculateAvg(gradesList) {
  let sum = 0;
  for (let grade of gradesList) {
    sum += grade;
  }
  return sum / gradesList.length;
}
function findAvg(gradesList) {
  const avg = calculateAvg(gradesList);
  console.log(`Average grade is: ${avg.toFixed(2)}`);
  if (avg > 65) {
    console.log("You passed!");
  } else {
    console.log("You failed and must repeat the course.");
  }
}
const grades = [70, 80, 60, 90, 50];
findAvg(grades);


