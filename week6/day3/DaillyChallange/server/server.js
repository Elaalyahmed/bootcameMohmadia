const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

// ✅ Middleware to parse JSON request bodies
app.use(express.json());

// ✅ Register routes
app.use('/', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
