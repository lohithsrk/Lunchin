const mongoose = require('mongoose');
const { rating } = require('../controllers/product');


const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema({
    chef: {
        type: ObjectId,
        ref: 'User'
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
    reviews: {
        type: [String]
    },
    ratings: [
        {
            star: {
                type: Number
            }
            // postedBy: { type: ObjectId, ref: 'User' }
        }
    ]
    

})

module.exports = mongoose.model('Product',productSchema)
