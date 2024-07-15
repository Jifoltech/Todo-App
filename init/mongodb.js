const mongoose = require("mongoose");
const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Database connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectMongodb;
// async function connectToDatabase() {
//   try {
//     await mongoose.connect(connectionUrl);
//     console.log("Database connected successfully");
//   } catch (err) {
//     console.log("Database connection error:", err.message);
//     process.exit(1);
//   }
// }
// connectToDatabase();
