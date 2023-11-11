// Importing the 'path' module
const path = require("path");

// Join path segments
console.log("Join path segments:", path.join(__dirname, "..", ".."));

// Resolve path to get the absolute path
const fullpath = path.resolve(__dirname, "first", "second", "third.js");
console.log("Full path:", fullpath);

// Parse the path into its components
console.log("Parse path:", path.parse(fullpath));

// Operating System path separator
console.log("OS path separator:", path.sep);

// Check if the path is absolute
console.log("Check if path is absolute:", path.isAbsolute("first/second"));

// Get the file name from the path
console.log("File name:", path.basename(fullpath));

// Get the file extension from the path
console.log("File extension:", path.extname(fullpath));

// ------------------------------------

// Working with URL

// Set URL
const siteURL = "http://localhost:8080/users?id=5123";

// Create URL object
const url = new URL(siteURL);

// Display information about the URL
console.log("URL information:", url);
