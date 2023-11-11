// Importing the 'fs' (file system) and 'path' modules
const fs = require("fs");
const path = require("path");

// Outputting a message to indicate the start of the script
console.log("START");

// Creating a folder asynchronously using fs.mkdir
fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Folder created");
});

// Outputting a message to indicate the end of the script
console.log("END");

// Writing data to a file using fs.writeFile
fs.writeFile(
  path.resolve(__dirname, "test.txt"),
  "5 qwertu 7 9 10 asd zxc",
  (err) => {
    if (err) {
      throw err;
    }
    console.log("File written");

    // Appending additional data to the file using fs.appendFile
    fs.appendFile(
      path.resolve(__dirname, "test.txt"),
      "APPENDED TO THE END",
      (err) => {
        if (err) {
          throw err;
        }

        fs.appendFile(
          path.resolve(__dirname, "test.txt"),
          "APPENDED TO THE END",
          (err) => {
            if (err) {
              throw err;
            }
            console.log("File written");
          }
        );
      }
    );
  }
);

// Defining asynchronous functions for file operations using Promises
const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    })
  );
};

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

// Performing file operations using the asynchronous functions
writeFileAsync(path.resolve(__dirname, "test.txt"), "data")
  .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "123"))
  .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "456"))
  .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "578"))
  .then(() => readFileAsync(path.resolve(__dirname, "test.txt")))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Removing the file asynchronously
removeFileAsync(path.resolve(__dirname, "test.txt")).then(() =>
  console.log("File was removed")
);

// TASK: Using environment variable to pass a string, write it to a file,
// read the file, count the number of words in the file, write the count to a new file,
// and then delete the original file
const text = process.env.TEXT || "";

writeFileAsync(path.resolve(__dirname, "text.txt"), text)
  .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
  .then((data) => data.split(" ").length)
  .then((count) =>
    writeFileAsync(path.resolve(__dirname, "count.txt"), `Word count: ${count}`)
  )
  .then(() => removeFileAsync(path.resolve(__dirname, "text.txt")));
