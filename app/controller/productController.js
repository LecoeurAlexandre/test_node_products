const {Product} = require('../model/productModel');

const productController = {
    list: async (req, res) => {
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (error) {
            console.trace(error);
            res.status(500).json({
                message: 'Server error'
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
                message: 'Server error'
            })
        }
    },

    create: async (req, res) => {
        try {
            if (!req.body.code || 
                !req.body.name || 
                !req.body.description || 
                !req.body.price || 
                !req.body.quantity || 
                !req.body.category || 
                !req.body.img || 
                !req.body.rating) {
                    throw new Error('Code, name, description, price, quantity, category, img and rating cannot be null')
            };
            const newProduct = await Product.create({
                code: req.body.code,
                name : req.body.name,
                description: req.body.description,
                price: req.body.price,
                quantity:req.body.quantity,
                category: req.body.category,
                img: req.body.img,
                rating: req.body.rating
            });
            res.json(newProduct);
        } catch (error) {
            console.trace (error);
            res.status(500).json({
                message: 'Server error'
            })
        }
    } 

};
module.exports = productController