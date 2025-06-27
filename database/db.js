const { Sequelize } = require("sequelize");
const pg = require("pg");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://neondb_owner:npg_UEJAOVQ1I4mg@ep-solitary-shadow-a4gnuiid-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require",
  {
    logging: false, // comment this line to enable logging
  }
);

module.exports = db;
