// index.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth"); // Routes for authentication
const taskRoutes = require("./routes/tasks"); // Routes for tasks
const cors = require("cors");
const bodyParser = require("body-parser");
const MongoDB = require("./config/db");

// const allowedOrigins = [
//   "https://to-do-application-frontend-5fhpilz3r-ashugupta1s-projects.vercel.app",
//   "http://localhost:8080", // Add localhost for development
// ];

dotenv.config(); // Load environment variables from .env file

const app = express();
MongoDB();

// Middleware
app.use(cors());
// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   })
// );

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
