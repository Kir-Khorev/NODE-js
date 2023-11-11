// Importing the 'dotenv' module to load environment variables from a file
const dotenv = require("dotenv");
dotenv.config();

// Displaying specific environment variables
console.log("PORT:", process.env.PORT);
console.log("NODE_ENV:", process.env.NODE_ENV);

// Displaying command line arguments
console.log("Command line arguments:", process.argv);

// Making a random choice
if (Math.random() > 0.5) {
  // If random number is greater than 0.5, enter an infinite loop
  while (true) {}
} else {
  // If random number is not greater than 0.5, print a message and exit the program
  console.log("Program execution completed");
  process.exit();
}
