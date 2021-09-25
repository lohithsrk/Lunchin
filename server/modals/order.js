const mongoose = require('mongoose')
const user = require('./user')
const product = require('./product')
const { ObjectId } = mongoose.Schema;
const orderSchema = new mongoose.Schema({
    
    productName : {
        type: ObjectId,
        ref: "product"
    }, 
    quantity : {
        type: Number,
        required :true,
    },
    pickupTime : {
        type: Number,
        required :true
        
    }

})

module.exports = mongoose.model('Order',orderSchema)
