const mongoose = require('mongoose')
catagorySchema = new mongoose.Schema({

 name: {
     
  type: String,
  required:true,
 }

})

module.exports = mongoose.model('Catagory',catagorySchema)