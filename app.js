// index.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth"); // Routes for authentication
const taskRoutes = require("./routes/tasks"); // Routes for tasks
const cors = require("cors");
const bodyParser = require("body-parser");
const MongoDB = require("./config/db");

dotenv.config(); // Load environment variables from .env file

const app = express();
MongoDB();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/tasks", taskRoutes); // Task management routes

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
