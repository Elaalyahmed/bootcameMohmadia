const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api/books', bookRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
