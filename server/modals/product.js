const mongoose = require('mongoose')
const Category = require('./category')
const user = require('./user')
const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema({
    chef: {
        type: ObjectId,
        ref: 'user'
    },
    category : {
        type: ObjectId,
        ref: 'Category'
    },
    name : {
        type: String,
        required:true,
        trim:true
    }, 
    price : {
        type: Number,
        required :true,
    },
    quantity : {
        type: Number,
        required :true,
    },
    qtyAvailable : {
        type: Number, 
    },
    availableDays : {
        type : [String]
    },
    deliveryTime : {
        type: Number

    },
    noticePeriod : {
        type: String
    },
    

})

module.exports = mongoose.model('Product',productSchema)
