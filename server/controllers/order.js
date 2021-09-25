const Order = require('../modals/order')
const User = require('../modals/user')

exports.addOrder = async (req,res) => {
    console.log(req.body,'order');
    const {productName,quantity,pickupTime} = req.body
    const order = await  new Order(req.body).save()
    console.log(order._id);
    await Order.findOne({_id:order._id})
    // await User.findOne({chef},)
    res.json(order)


}
// exports.addOrderToChef = async (req,res) => {
//     const {productName,chef,quantity,pickupTime} = req.body
//     await User.findOneAndUpdate({chef},{orders:})

// }
