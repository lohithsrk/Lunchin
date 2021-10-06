const express = require('express')
const router = express.Router();



// imports

const {createProduct , showProducts,ChefProducts }  = require('../controllers/product')

const { createCategory,showCategories }  = require('../controllers/category')

// create 

router.post('/category/:id/chef/:id/product',createProduct)
router.get('/products',showProducts)
router.get('/chef/:id/chefproducts',ChefProducts)
// router.post('product/category/:id', createProduct)
// router.post('/product/:id/star',rating)







module.exports = router;