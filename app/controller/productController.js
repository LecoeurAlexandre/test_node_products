const {Product} = require('../model/productModel');

const productController = {
    list: async (req, res) => {
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (error) {
            console.trace(error);
            res.status(500).json({
                message: 'Error server'
            });
        }
    },
    read: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await Product.findByPk(id);

            if(product) {
                res.json(product);
            } else {
                res.status(404).json(`No product with id ${id}`);
            }
        } catch (error){
            console.trace (error);
            res.status(500).json({
                message: 'Error server'
            })
        }
    }

};
module.exports = productController