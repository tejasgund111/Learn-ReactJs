const mongoose = require('mongoose');
require("dotenv").config(); // jo bhi environment ke andar define kiya hoga wo sab load ho jayega process object ke andar

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => console.log("DB connection established"))
        .catch((error) => {
            console.log("Issue in DB connection");
            console.error(error.message);
            process.exit(1);
        });
}

module.exports = dbConnect;

// this files ensures the connection between the application and the database