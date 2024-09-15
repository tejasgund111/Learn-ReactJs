// create app
const express = require("express");
const app = express();
require("dotenv").config();

// PORT 
const PORT = process.env.PORT || 3000;

// middlware
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());

// connecting DB
require("./config/database").connect();

// connecting cloudinary
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// mounting api route
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

// activate server
app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`);
})
