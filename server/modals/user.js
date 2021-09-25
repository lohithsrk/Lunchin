const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { ObjectId } = mongoose.Schema;
const product = require("./product");
const Order = require('./order')
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
