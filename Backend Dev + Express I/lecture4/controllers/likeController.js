// import 
const Post = require("../models/postModel");
const Like = require("../models/likeMode");

// like post
exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;
        const like = new Like(
            {
                post, user
            });
        const savedLike = await like.save();

        // update the post collection 
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true })
            .populate("likes").exec();

        res.json({
            post: updatedPost
        })
    }
    catch (error) {
        return res.status(500).json({
            error: "Error while liking post"
        });
    }
};

// unlike post
exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body; // post ki id se post ki collection me delete kar denge and like ki id se like ke collection me delete kar denge

        // find and delete in like collection
        const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

        // update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, { $pull: { likes: deletedLike._id } }, { new: true })
            .pupulate("likes").exec();

        res.json({
            post: updatedPost
        });

    }
    catch (error) {
        return res.status(500).json({
            error: "Error while unliking post"
        });
    }
}

// whenever we are unliking the post we have to remove that data from likeModel as well as postModel because they are interlinked
// so we have to update them both
