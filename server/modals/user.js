const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { ObjectId } = mongoose.Schema;
const product = require("./product");
const Order = require('./order')
<<<<<<< HEAD
=======

>>>>>>> 0e5bded920b8ef32a7ca22fac53ce7072c9925d7
userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  orders: {
    type: [ObjectId],
    ref: "Order",
  },
  
});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
