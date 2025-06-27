const { Sequelize } = require("sequelize");
const pg = require("pg");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/to-do-list",
  {
    //logging: false, // comment this line to enable logging
  }
);

module.exports = db;
