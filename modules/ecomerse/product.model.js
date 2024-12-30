const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    productimage:{
        type:String,
    },
    price:{
        require:true,
        type:Number
    },
    stock:{
        default:0,
        type:Number
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
    }

},{timestamps:true});

export const product=mongoose.model("Category",productSchema);