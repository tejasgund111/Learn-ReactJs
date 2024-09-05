const Todo = require("../models/Todo");

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