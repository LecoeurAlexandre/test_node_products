const express = require('express');
const productController = require('./controller/productController');
const mainController = require('./controller/mainController');

const router = express.Router();

router.get('/products', productController.list);
router.get('/products/:id', productController.read);
router.post('/products', productController.create);
router.patch('/products/:id', productController.update);
router.delete('/products/:id', productController.delete);

router.use(mainController.notFound);
  
module.exports = router;
