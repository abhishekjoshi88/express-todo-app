// app.js (or server.js)
const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todoRoutes");
const db = require("./db"); // Require the database connection

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use routes
app.use("/api/todos", todoRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
