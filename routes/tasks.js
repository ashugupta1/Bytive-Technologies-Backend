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
      createdBy: req.user.id,
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
  const { title, description, status } = req.body;
  try {
    // Find the task by ID and update the fields
    const updateTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,        // Update title
        description,  // Update description
        status,       // Update status
      },
      { new: true } // Return the updated task
    );

    // If task not found, return 404
    if (!updateTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Return the updated task
    return res.status(200).json(updateTask);
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

//get a single task by id
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId).populate(
      "createdBy",
      "username email"
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

module.exports = router;
