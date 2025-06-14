// challenge.js

const { greet } = require('./daily-challenge/greeting');
const { displayColorfulMessage } = require('./colorful-message');
const { readFileContent } = require('./read-file');

// Greet the user
const greetingMessage = greet('Ahmed');
console.log(greetingMessage);

// Display a colorful message
displayColorfulMessage();

// Read and display content from a file (e.g., message.txt)
const filePath = './message.txt';

readFileContent(filePath)
  .then(content => {
    console.log('\n File Content:');
    console.log(content);
  })
  .catch(err => {
    console.error('Error reading file:', err.message);
  });
