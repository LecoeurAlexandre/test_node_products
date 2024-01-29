const {Product} = require('../model/productModel');

const productController = {
    list: async (req, res) => {
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (error) {
            console.trace(error);
            res.status(500).json({
                message: 'Error'
            })
        }
    }
};
module.exports = productController