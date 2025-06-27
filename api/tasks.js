const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");

// TASK 4: Add the necessary routes here
// This time, use your newly created Sequelize models instead of the dummy database

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).send("Internal Server Error");
  }
});

// GET a single task by id
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).send("Internal Server Error");
  }
});

// PATCH a task
router.patch("/:id", async (req, res) => {
  try {
    const [updated] = await Task.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedTask = await Task.findByPk(req.params.id);
      res.json(updatedTask);
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).send("Internal Server Error");
  }
});

// DELETE a task
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Task.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).send("Internal Server Error");
  }
});

// POST create a new task
router.post("/", async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

// TASK 5: Create a new routes file for users, and add as many routes as you see fit
// Don't forget to export the router, and import it into api/index.js
