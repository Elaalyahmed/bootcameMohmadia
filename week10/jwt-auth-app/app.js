const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const authenticateToken = require("./middleware/authMiddleware");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/api/profile", authenticateToken, (req, res) => {
  res.json({ message: `Hello ${req.user.username}, this is your profile.` });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
