const Todo = require("../models/Todo");

exports.editImage = async(req, res) => {
    try{
        const {id} = req.params;
        const {imageName, imageURL, imageDetails} = req.body;

        const img = await Image.findByIdAndUpdate(
            {_id : id},
            {imageName, imageURL, imageDetails}
        )
        res.status(200).json(
            {
                success : true,
                data : img
            }
        )
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message
        })

    }
}

// define route handler
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params; // 2nd way of fetching id
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() }
        )

        res.status(200).json({
            success: true,
            data: todo,
            message: "Updated successfully"
        })

    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message
        })

    }
}