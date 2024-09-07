const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// route
const blog = require("./routes/blog");
//mount
app.use("/api/v1", blog);

// db 
const connectWithDb = require("./config/database");
connectWithDb();

app.listen(PORT, ()=> {
    console.log(`Server listening on ${PORT}`);
});

// default route
app.get("/", (req,res)=> {
    res.send(`<h1>This is homepage</h1>`);
})

