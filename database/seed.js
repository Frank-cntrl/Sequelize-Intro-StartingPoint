const db = require("./db");
const { Task, User } = require("./index");

const seed = async () => {
  db.logging = false;
  await db.sync({ force: true }); // Drop and recreate tables
  const users = await User.bulkCreate([
    { name: "Finn" },
    { name: "AJ" },
    { name: "Shahid" },
    { name: "Frank"},
  ]);

  console.log(`👥 Created ${users.length} users`);

  const tasks = await Task.bulkCreate([
    {
      id: 1,
      title: "Get eight hours of sleep",
      description: "Sleepy time tea is a must",
      completed: false,
      userId: users[0].id,
    },
    {
      id: 2,
      title: "EOD survey",
      description: "The EOD survey is always linked in the Discord",
      completed: true,
      userId: users[1].id,
    },
    {
      id: 3,
      title: "Install PostgreSQL",
      description: "Don't forget your PostgreSQL password!",
      completed: true,
      userId: users[2].id,
    },
  ]);

  console.log(`📝 Created ${tasks.length} tasks`);

  console.log("🌱 Seeded the database");
  db.close();
};

seed();
