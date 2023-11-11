// Importing the 'fs' and 'path' modules
const fs = require("fs");
const path = require("path");

// Reading data from a file using a callback
fs.readFile(path.resolve(__dirname, "test.txt"), (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

// Creating a readable stream to read data from a file
const stream = fs.createReadStream(path.resolve(__dirname, "test2.txt"));

// Handling events for the readable stream
stream.on("data", (chunk) => {
  console.log("chunk", chunk); // Processing each chunk of data
});
stream.on("end", () => console.log("Finished reading")); // Handling the end of the stream
stream.on("open", () => console.log("Started reading")); // Handling the opening of the stream
stream.on("error", (e) => console.log(e)); // Handling errors during reading

// Creating a writable stream to write data to a file
const writableStream = fs.createWriteStream(
  path.resolve(__dirname, "test3.txt")
);
for (let i = 0; i < 20; i++) {
  writableStream.write("A" + i + "\n"); // Writing data to the stream
}
writableStream.end(); // Indicating the end of the writing process

// Creating an HTTP server and streaming data to the response
const http = require("http");
http.createServer((req, res) => {
  const stream = fs.createReadStream(path.resolve(__dirname, "test3.txt")); // Creating a readable stream

  // Piping the readable stream to the response (writable stream)
  stream.pipe(res);
});
