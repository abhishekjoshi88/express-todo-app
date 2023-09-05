// db.js
const mongoose = require("mongoose");

const dbURI = "mongodb://127.0.0.1:27017/todo";

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
