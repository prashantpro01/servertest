const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({},{timestamps:true});

export const category=mongoose.model("Category",categorySchema);