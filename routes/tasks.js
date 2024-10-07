// routes/tasks.js
const express = require("express");
const Task = require("../models/Task");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();

// Create Task Route
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({
      title,
      description,
      createdBy: req.user.id, // Assuming req.user is set by auth middleware
    });
    await task.save();
    return res.status(201).json(task);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// Update Task Route
router.put("/:id", authMiddleware, async (req, res) => {
  const { status } = req.body; // Assuming only status is being updated
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true } // Return the updated task
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json(task);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// Delete Task Route
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await Task.findByIdAndDelete(taskId);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// Get All Tasks Route
router.get("/", authMiddleware, async (req, res) => {
  try {
    // Find tasks created by the logged-in user and populate 'createdBy' field
    const tasks = await Task.find({ createdBy: req.user.id }).populate(
      "createdBy",
      "username email"
    );
    return res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
