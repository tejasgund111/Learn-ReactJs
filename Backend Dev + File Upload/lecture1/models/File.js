const mongoose = require("mongoose");

// schema
const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// export model
const File = mongoose.model("File", fileSchema);
module.exports = File;