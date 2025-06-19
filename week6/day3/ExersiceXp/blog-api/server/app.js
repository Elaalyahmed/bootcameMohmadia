const express = require('express');
const app = express();
app.use(express.json());


// Test route
app.get('/', (req, res) => {
  res.send('Welcome to the Book API!');
});

module.exports = app; 
