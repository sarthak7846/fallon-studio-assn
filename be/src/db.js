const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const connectToDb = () => {
  console.log("Connecting to MongoDB...");

  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  connectToDb,
};
