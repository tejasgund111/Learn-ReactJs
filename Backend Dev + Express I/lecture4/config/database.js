const mongoose = require("mongoose");

require("dotenv").config();
const DATABASE_URL = process.env.DATABASE_URL;

const connectWithDb = () => {
    mongoose.connect(DATABASE_URL)
    .then(()=> console.log("DB connection established"))
    .catch((err) => {
        console.log("DB connection error")
        console.log(err);
        process.exit(1);
    });
}

module.exports = connectWithDb;