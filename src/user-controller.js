// Importing the User model
const User = require("./user-model");

// Function to get users, either all or by ID
const getUsers = async (req, res) => {
  let users;
  if (req.params.id) {
    users = await User.findById(req.params.id);
  } else {
    users = await User.find();
  }
  res.send(users);
};

// Function to create a new user
const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.send(user);
};

// Exporting the functions as an object
module.exports = {
  getUsers,
  createUser,
};
