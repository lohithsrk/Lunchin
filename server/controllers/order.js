const Order = require('../modals/order')
const User = require('../modals/user')

exports.addOrder = async (req,res) => {
    // console.log(req.body,'order');
    const {productName,quantity,pickupTime} = req.body
    const order = await  new Order(req.body).save()
    res.json(order)
    // console.log(order._id);
    const newOrder =  await Order.findOne({_id:order._id}).populate({path:'productName',populate:'chef'}).exec()
    const foundchef = await User.findOneAndUpdate({_id: newOrder.productName.chef._id},{$push:{orders:order}})
    console.log(foundchef,"chef found");
    // console.log(newOrder, "found order");


}
// exports.addOrderToChef = async (req,res) => {
//     const {productName,chef,quantity,pickupTime} = req.body
//     await User.findOneAndUpdate({chef},{orders:})

// }
