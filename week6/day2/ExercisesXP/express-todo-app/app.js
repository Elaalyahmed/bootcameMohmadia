// app.js
const express = require('express');
const app = express();

app.use(express.json());

// Import routes
const todosRouter = require('./routes/todos');

// Use routes
app.use('/todos', todosRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});