const { DataTypes } = require("sequelize");
const db = require("./db");
const User = require("./user")

// TASK 1: Define the Task model here
const Task = db.define("task", {
  // You should define the following columns:
  // - title: string, required
  // - description: string, required
  // - completed: boolean, default false
id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true,
},
title: {
  type: DataTypes.STRING,
  allowNull: false,
},
description: {
  type: DataTypes.STRING,
  allowNull: false,
},
completed:{
  type: DataTypes.BOOLEAN,
  allowNull: false,
  defaultValue: false,
},
userId:{
  type: DataTypes.INTEGER,
  allowNull: false,
},
});

module.exports = Task;
