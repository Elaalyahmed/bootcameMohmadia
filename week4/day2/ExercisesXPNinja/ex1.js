// Exercise 1
// const data = [
//   {
//     name: 'Butters',
//     age: 3,
//     type: 'dog'
//   },
//    {
//     name: 'Cuty',
//     age: 5,
//     type: 'rabbit'
//   },
//   {
//     name: 'Lizzy',
//     age: 6,
//     type: 'dog'
//   },
//   {
//     name: 'Red',
//     age: 1,
//     type: 'cat'
//   },
//   {
//     name: 'Joey',
//     age: 3,
//     type: 'dog'
//   },
//   {
//     name: 'Rex',
//     age: 10,
//     type: 'dog'
//   },
// ];

// let totalHumanYears = 0;

// for (let i = 0; i < data.length; i++) {
//   if (data[i].type === 'dog') {
//     totalHumanYears += data[i].age * 7;
//   }
// }

// console.log("Total human years:", totalHumanYears);

// const totalYears = data.reduce((sum, animal) => {
//   if (animal.type === 'dog') {
//     return sum + animal.age * 7;
//   }
//   return sum; 
// }, 0);

// console.log("TotalYears:", totalYears);

// Exercise 2 
// const userEmail3 = ' cannotfillemailformcorrectly@gmail.com';
// const cleanEmail = userEmail3.trim();
// console.log(cleanEmail)

// Exercise 3 
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

const usersObj = users.reduce((acc, user) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    acc[fullName] = user.role;
    return acc;
}, {});

console.log(usersObj);

// Exercise 4
const letters = ['x', 'y', 'z', 'z'];
const count = {};
for (let l of letters) count[l] = (count[l] || 0) + 1;
console.log(count); 
 const nextLetters = ['x', 'y', 'z', 'z' ];
 const countN = nextLetters.reduce((a, l) => (a[l] = (a[l] || 0) + 1, a), {});
console.log(countN)




