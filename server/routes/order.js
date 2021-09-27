const express = require('express')
const router = express.Router();

const {addOrder,showOrder,addOrdertoChef , removeOrder} = require('../controllers/order')
router.post('/product/:id/order',addOrder) 
router.get('/orders',showOrder) 
router.post('/chef/:chefid/order/:orderid/addorder',addOrdertoChef)
router.post('/chef/:chefid/order/:orderid/removeorder',removeOrder)


module.exports = router