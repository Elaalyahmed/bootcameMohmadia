const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(express.static('public')); // serve HTML files
app.use('/', userRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
