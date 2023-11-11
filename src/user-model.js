// Importing mongoose
const mongoose = require("mongoose");

// Creating a user schema using mongoose.Schema
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
});

// Creating and exporting a User model based on the schema
module.exports = mongoose.model("User", userSchema);
