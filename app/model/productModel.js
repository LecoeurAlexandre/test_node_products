const { DataTypes } = require("sequelize");
const sequelize = require('../database');

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_product'
    },
    product_code: {
      type: DataTypes.STRING(9),
      allowNull: false,
      field: 'product_code',
      validate: {
        notEmpty: true,
        len: [1, 9],
      },
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'product_name',
      validate: {
        notEmpty: true,
        len: [1, 100],
      },
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'product_description',
      validate: {
        notEmpty: true,
        len: [1, 255],
      },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: 'product_price',
      validate: {
        isDecimal: true,
        min: 0.00,
        max: 99999999.99,
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_quantity',
      validate: {
        isInt: true,
        min: 0,
      },
    },
    category: {
      type: DataTypes.STRING(24),
      allowNull: false,
      field: 'product_category',
      validate: {
        notEmpty: true,
        len: [1, 24],
      },
    },
    img: {
      type: DataTypes.STRING(24),
      allowNull: false,
      field: 'product_img',
      validate: {
        notEmpty: true,
        len: [1, 24],
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_rating',
      validate: {
        isInt: true,
        min: 0,
        max: 10,
      },
    }, 
  }, {
    tableName:'product',
    timestamps: false,
});
  
  module.exports = {Product} ;