"Posts App"

-----------------------------------------------------------------------------------------
something new :

In commentModel.js >>

post: {
    type: mongoose.Schema.Types.ObjectId, // Specifies that this field will store an ObjectId.
    ref: "Post" // Indicates that this ObjectId references the "Post" model.
}

1. type: mongoose.Schema.Types.ObjectId:
This indicates that the post field will store an ObjectId, which is a unique identifier for documents in MongoDB.
In this case, it's used to link a comment to a specific post.

2. ref: "Post":
This defines a reference to the Post model.
By using ref, you tell Mongoose that the ObjectId stored in the post field corresponds to a document in the Post collection.
This allows you to establish a relationship between the Comment and Post models.

----------------------------------------------------------------------------------------

Point to be noted:

If one model is going to be used in another model, then use Id for fetching that model's data 

-----------------------------------------------------------------------------------------

Here in this part we are going to use "save" method for storing the data in the database
but we have to ensure that we had already created the object

-----------------------------------------------------------------------------------------

It will depend on the model, how to write the controller

-----------------------------------------------------------------------------------------

Inside commentController

// find the post by id and add the new comment to its comments aray
const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true });

Imagine you have a blog post with an array of comments. When a new comment is created and saved (savedComment), this code would be used to update the corresponding post by adding the new comment’s _id to the comments array in the Post document.


// here if we not use populate("comments") then the only id's will be shown, but we want actual comments instead of only id so we have used populate

const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
.populate("comments") // Populate the comments array with comment documents
.exec();

-----------------------------------------------------------------------------------------

we can create a new data by using "create" method or by using "save" method
   
-----------------------------------------------------------------------------------------