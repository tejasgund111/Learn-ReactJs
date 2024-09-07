const mongoose = require("mongoose");

// Define the schema for comments
const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId, // Specifies that this field will store an ObjectId.
        ref: "Post" // Indicates that this ObjectId references the "Post" model.
    },
    user: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

// Export the model correctly using mongoose.model
module.exports = mongoose.model("Comment", commentSchema);
