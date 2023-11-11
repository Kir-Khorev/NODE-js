// Importing the EventEmitter class from the 'events' module
const Emitter = require("events");

// Creating a new instance of EventEmitter
const emitter = new Emitter();

// Defining a callback function to handle the 'message' event
const callback = (data, second, third) => {
  console.log("You sent a message: " + data);
  console.log("Second argument: " + second);
};

// Subscribing the callback function to the 'message' event
emitter.on("message", callback);

// Emitting the 'message' event multiple times
emitter.emit("message");
emitter.emit("message");
emitter.emit("message");

// Removing all event listeners for the 'message' event
emitter.removeAllListeners();

// Removing a specific event listener (callback) for the 'message' event
emitter.removeListener("message", callback);

// Reading the MESSAGE environment variable
const MESSAGE = process.env.message || "";

// Emitting the 'message' event with different data based on the environment variable
if (MESSAGE) {
  emitter.emit("message", MESSAGE, 123);
} else {
  emitter.emit("message", "You did not specify a message");
}

// Use cases for events:
// - Handling HTTP requests
// - Managing WebSockets
// - Implementing long-polling mechanisms
// - Distributing events in clusters
