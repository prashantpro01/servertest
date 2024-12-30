const mongoose = require("mongoose");

const orderItemsSchema = new mongoose.Schema({
    productid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity : {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:String,
        required: true,
        unique: true,
        lowercase:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    orderItems:{
        type: [orderItemsSchema]
    },
address:{
    type: String,
    required:true
},
status:{
    type: String,
    enum:["PENDING","CANCELLED","DELIVERED"],
    default:"PENDING"
}
},{timestamps:true})

export const order= mongoose.model('Order',orderSchema);

