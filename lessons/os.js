// Importing the 'os' (operating system) and 'cluster' modules
const os = require("os");
const cluster = require("cluster");

// Outputting information about the operating system
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);

// Checking if the current process is the master process
if (cluster.isMaster) {
  // Forking worker processes equal to the number of available CPU cores minus 2
  for (let i = 0; i < os.cpus().length - 2; i++) {
    cluster.fork();
  }

  // Handling the 'exit' event for worker processes
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker with pid=${worker.process.pid} died`);

    // If the worker process exited with a code, fork a new worker process
    if (code) {
      cluster.fork();
    } else {
      console.log("Worker died...");
    }
  });
} else {
  // Outputting information about the worker process if it's not the master process
  console.log(`Worker with pid=${process.pid} started`);

  // Setting an interval to log a message every 3 seconds
  setInterval(() => {
    console.log(`Worker with pid=${process.pid} is still working`);
  }, 3000);
}
