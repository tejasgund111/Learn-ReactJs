// Import models
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// Business logic
exports.createComment = async (req, res) => {
    try {
        // Fetch data from the request body
        const { post, user, body } = req.body;

        // Create a comment object
        const comment = new Comment({
            post, user, body
        });

        // Save the new comment into the database
        const savedComment = await comment.save();

        // Find the post by id and add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(
            post, 
            { $push: { comments: savedComment._id } }, 
            { new: true }
        ).populate("comments")  // Populate the comments array with comment documents
        .exec();

        // Send the updated post as the response
        res.status(200).json({
            post: updatedPost
        });

    } catch (err) {
        // Return an error response if something goes wrong
        return res.status(500).json({
            error: "Error while creating comment"
        });
    }
};
