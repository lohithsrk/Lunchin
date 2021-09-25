const express = require('express')
const router = express.Router();

const {addOrder} = require('../controllers/order')
router.post('/product/:id/order',addOrder) 

module.exports = router