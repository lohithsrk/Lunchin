const Order = require('../modals/order')
const User = require('../modals/user')
const Product = require('../modals/product')
exports.addOrder = async (req,res) => {
    // console.log(req.body,'order');
    const {productName,quantity,pickupTime} = req.body
    // const order = await  new Order(req.body).save()
    const product = await Product.findOne({_id: productName})
    const orderprice = parseInt(quantity * product.price)
    const neworder = await new Order({
        productName,
        quantity,
        pickupTime,
        price: orderprice
    }).save() 
    res.json(neworder)
    // console.log(order._id);
    // const newOrder =  await Order.findOne({_id:order._id}).populate({path:'productName',populate:'chef'}).exec()
    const foundchef = await User.updateMany({$push:{orders:neworder}}).exec()

    console.log(foundchef,"chef found");
    // console.log(newOrder, "found order");
}
exports.showOrder = async (req,res) => {
    // const populateOrders  = await Order.find({}).populate({path:'productName',populate:'chef'}).exec()
    const foundOrders = await Order.find({}).populate({path:'productName',populate:'chef'}).exec()
    res.json(foundOrders)

}

exports.addOrdertoChef =  async (req,res) => {
    const {orderid,chefid} = req.params
    const newOrder =  await Order.findOne({_id:orderid})
    const removeOrder = await User.updateMany({$pull:{orders: {$in : [newOrder]}}}).exec()
    const chefearning = await User.findOne({_id: chefid})
    const foundchef = await User.findOneAndUpdate ({_id: chefid},{$push:{orders:newOrder}, earnings: chefearning.earnings + newOrder.price}).exec()
    res.json(removeOrder)

}
exports.removeOrder = async (req,res) => {
    const {orderid,chefid} = req.params
    const newOrder =  await Order.findOne({_id:orderid})
    const foundchef = await User.findOneAndUpdate({_id: chefid},{$pull:{orders: {$in : [newOrder]}}}).exec()
    res.json(foundchef)

}