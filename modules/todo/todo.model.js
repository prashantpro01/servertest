const mongoose = require("mongoose");
const todoschema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    complete:{
        type: Boolean,
        default: false,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subtodo:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ],//array of subtodos

},{timestamps:true});

export const Todo = mongoose.model("Todo",todoschema);