const {Product} = require('../model/productModel');
const { defineInventoryStatus } = require('../util/inventoryUtil');
const { addPropertiesToObject } = require('../util/responseConstructorUtil');

const productController = {
    list: async (req, res) => {
        try {
            const products = await Product.findAll();
            const productsWithStatus = products.map(product => addPropertiesToObject(product, defineInventoryStatus(product.quantity)))
            res.json(productsWithStatus);
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
                const combinedObject = addPropertiesToObject (product, defineInventoryStatus(product.quantity))
                res.json(combinedObject);
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

            const combinedObject = addPropertiesToObject (newProduct, defineInventoryStatus(newProduct.quantity))
            res.json(combinedObject);
        } catch (error) {
            console.trace (error);
            res.status(500).json({
                message: 'Server error'
            })
        }
    },
    
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await Product.findByPk(id);
            if (product) {
                if (req.body.code) {
                    product.code = req.body.code;
                }
                if (req.body.name) {
                    product.name = req.body.name;
                }
                if (req.body.description) {
                    product.description = req.body.description;
                }
                if (req.body.price) {
                    product.price = req.body.price;
                }
                if (req.body.quantity) {
                    product.quantity = req.body.quantity;
                }
                if (req.body.category) {
                    product.category = req.body.category;
                }
                if (req.body.img) {
                    product.img = req.body.img;
                }
                if (req.body.rating) {
                    product.rating = req.body.rating;
                }
                const productSaved = await product.save();
                const combinedObject = addPropertiesToObject (productSaved, defineInventoryStatus(productSaved.quantity))
                res.json(combinedObject);
            } else {
                res.status(404).json(`No product with id ${id}`);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json({
            message: 'Server error'
            });
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await Product.findByPk(id);
            if (product) {
                await product.destroy();
                res.json('Product deleted.');
            } else {
                res.status(404).json(`No product with id ${id}`);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json({
            message: 'Server error'
            });
        }
    }
};
module.exports = productController