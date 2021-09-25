const mongoose = require('mongoose')
const user = require('./user')
const { ObjectId } = mongoose.Schema;
const orderSchema = new mongoose.Schema({
    
    productName : {
        type: String,
        required:true,
        trim:true
    },
    chef : {
        type: String,
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
