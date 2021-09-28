const mongoose = require('mongoose')


const { ObjectId } = mongoose.Schema;
const orderSchema = new mongoose.Schema({
    
    productName : {
        type: ObjectId,
        ref: "Product"
    }, 
    quantity : {
        type: Number,
        required :true,
    },
    pickupTime : {
        type: Number,
        required :true
        
    },
    price: {
        type: Number
    }
    ,
    created_at : {
        type: Date,
        default: Date.now

    }

})

module.exports = mongoose.model('Order',orderSchema)
