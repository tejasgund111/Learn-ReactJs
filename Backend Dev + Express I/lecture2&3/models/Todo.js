const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            maxLength: 50
        },
        description:{
            type: String,
            required:true,
            maxLength: 50
        },
        createdAt:{
            type: Date,
            required: true,
            default: Date.now()
        },
        updatedAt:{
            type: Date,
            required: true,
            default: Date.now()
        }
    }
);
module.exports = mongoose.model("Todo", todoSchema); // "Todo" ke nam se export kar diya
// converts "Todo" to lowercase and makes it plural -> so collection name will be created as "todos" in mongo database

