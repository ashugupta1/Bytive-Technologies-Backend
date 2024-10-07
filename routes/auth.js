// routes/auth.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Assuming you have a User model
const router = express.Router();

//SignUp Route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username+" "+ email+" "+password );
  

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password for signup:", hashedPassword);

    // Create user
    user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log(password);
      console.log(user.password);
      
      
      console.log("Password not matched");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
