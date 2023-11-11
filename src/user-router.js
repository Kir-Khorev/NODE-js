// Importing the Router and user-controller modules
const Router = require("../framework/Router.js");
const controller = require("./user-controller");

// Creating a new instance of the Router
const router = new Router();

// Defining routes for handling GET and POST requests on /users
router.get("/users", controller.getUsers);
router.post("/users", controller.createUser);

// Exporting the configured router
module.exports = router;
