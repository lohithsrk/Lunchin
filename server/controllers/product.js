const Product =  require('../modals/product')


exports.createProduct = async (req,res) => {
    console.log(req.body,'incoming');
    const {category,name,price,quantity} = req.body

    const product=  await new Product(req.body).save()
     res.json(product)
}
exports.showProducts = async (req,res) => {
    const allProducts = await Product.find({})
    res.json(allProducts)
}
exports.ChefProducts  = async (req,res) => {
    const {chefId} = req.params
    const chefProduct = await Product.find({chef:chefId}).exec()
    res.json(chefProduct)
}
