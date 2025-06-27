const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");

// TASK 4: Add the necessary routes here
// This time, use your newly created Sequelize models instead of the dummy database

// GET all tasks
router.get("/", async(req, res) => {
  try{
  const task = await Task.findAll();
  res.json(task);
  }catch (error){
    res.status(500).send({error: error.message});
  }
});

// GET a single task by id

// Patch a task by id
router.patch("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { title, description, completed } = req.body;
    const [updatedRows] = await Task.update(
      { title, description, completed },
      { where: { id } }
    );
    if (updatedRows === 0) {
      return res.status(404).json({ error: "Task not found" });
    }
    const updatedTask = await Task.findByPk(id);
    res.json(updatedTask);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// DELETE a task by id
router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const deletedRows = await Task.destroy({ where: { id } });
    if (deletedRows === 0) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// Create a new task
router.post("/", async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const newTask = await Task.create({
      title,
      description,
      userId: userId || 1, // Use 1 if not provided
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;

// TASK 5: Create a new routes file for users, and add as many routes as you see fit
// Don't forget to export the router, and import it into api/index.js
