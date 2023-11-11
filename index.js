// 1. Setting the port
const PORT = process.env.PORT || 3000;

// 2. Importing necessary modules and creating an Application instance
const Application = require("./framework/Application");
const userRouter = require("./src/user-router");
const jsonParser = require("./framework/parseJson");
const parseUrl = require("./framework/parseUrl");
const mongoose = require("mongoose");

const app = new Application();

// 3. Adding middleware to the application
app.use(jsonParser);
app.use(parseUrl("http://localhost:3000"));

// 4. Adding a router to the application
app.addRouter(userRouter);

// 5. Connecting to the database and starting the server
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user:123@cluster0.4comu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
