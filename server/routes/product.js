const express = require('express')
const router = express.Router();



// imports

const {createProduct , showProducts} = require('../controllers/product')

const { createCategory,showCategories }  = require('../controllers/category')

// create 

router.post('/product',createProduct)
router.get('/products',showProducts)
router.post('product/category/:id', createProduct)








module.exports = router;