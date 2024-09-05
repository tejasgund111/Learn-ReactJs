// server instantiate - creating the own server
const express = require('express');
const app = express();

// used the parser req.body in express -> PUT, POST
const bodyParser = require('body-parser');
// specifically parse JSON data & add it to the request.body object
app.use(bodyParser.json());

// Use the built-in express.json() middleware
// app.use(express.json());

// server listening on port 3000
app.listen(3000, () => {
    console.log("server started...!!!");
});

// routes
app.get('/', (req, res) => {
    res.send("hello");
});

app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car submitted successfully");
});
// we have to use 'middleware' to parse the data from the request's body
// we will verify the post route in the postman -> test it in postman


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase')
    .then(() => { console.log("Database connection established") })
    .catch((error) => {console.log("Error connecting to Mongo")})

// steps >>>
// create a folder
// move to that folder
// npm init -y
// open folder using vscode
// npm i express
// create server.js

// mongoose is used to connect server to the database