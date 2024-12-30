const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    passwords:{
        type:String,
        required:[true,"password is required"],
        unique:true,
        lowercase:true
    }
},{timestamps:true});

export const User=mongoose.model("User",userSchema)