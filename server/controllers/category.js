const Category =  require('../modals/category')


exports.createCategory = async (req,res) => {
    
    const category =  await new Category({name:req.body.name}).save()
    console.log(category);
     res.json(category)
}
exports.showCategories = async (req,res) => {
   
    const category = await Category.find({})
    res.json(category)
}