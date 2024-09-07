const express = require("express");
const app = express();

// load config from .env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todo");
// mount the todo api routes
app.use("/api/v1/", todoRoutes);
// localhost:3000/api/v1/  -> abhi iske baad todoRoutes mein pade routes aa jayenge
// ex. localhost:3000/api/v1/createTodo

// start server
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});

// connect to database
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/", (req, res) => {
    res.send(`<h1>This is Home Page</h1>`)
})
