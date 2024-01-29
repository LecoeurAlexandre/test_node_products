const express = require('express');
const productController = require('./controller/productController');
const mainController = require('./controller/mainController');

const router = express.Router();

router.get('/products', productController.list);
router.get('/products/:id', productController.read)
  
module.exports = router;
