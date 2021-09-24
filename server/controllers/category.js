const Category =  require('../modals/category')


exports.createCategory = async (req,res) => {
     await Category.create(req.body)
     res.json(Category)
}
exports.showCategories = async (req,res) => {
   
    const category = await Category.find({})
    res.json(category)
}