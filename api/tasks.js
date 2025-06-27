const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");

// TASK 4: Add the necessary routes here
// This time, use your newly created Sequelize models instead of the dummy database

// GET all tasks
router.get("/", async(req, res) => {
  try{
  const task = Task.findAll();
  res.json(task);
  }catch (error){
    res.status(500).send({error: error.message});
  }
});

// GET a single task by id

// Patch a task by id
router.patch("/:id", async(req,res) => {
  try{
  const id = Number(req.params.id);
  const task = req.body;
  const updatedTask = Task.update(id, task);
  res.json(updatedTask);
  }catch (error){
    res.status(500).send({error: error.message});
  }
});

// Delete a task by id
router.delete("/:id", async(req, res) => {
  try{
  const id = Number(req.params.id);
  const removeTask = Task.delete(id);
  res.status(200).json(removeTask);
  }catch (error){
    res.status(500).send({error: error.message});
  }
});


// Create a new task
router.post("/", async(req, res) => {
  try{
  const { title, description, userId } = req.body;
  const newTask = Task.create({
    title,
    description,
    completed: false,
    userId: Number(userId),
  });
  res.status(201).json(newTask);
  }catch (error){
    res.status(500).send({error: error.message});
  }
});

module.exports = router;

// TASK 5: Create a new routes file for users, and add as many routes as you see fit
// Don't forget to export the router, and import it into api/index.js
