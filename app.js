const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth"); 
const taskRoutes = require("./routes/tasks");
const cors = require("cors");
const bodyParser = require("body-parser");
const MongoDB = require("./config/db");



dotenv.config(); 

const app = express();
MongoDB();

// Middleware
app.use(cors());

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes); 
app.use("/api/tasks", taskRoutes); 

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
