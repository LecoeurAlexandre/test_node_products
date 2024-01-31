create database if not exists virtual_shop;
use virtual_shop;

CREATE TABLE product (
id_product INT PRIMARY KEY auto_increment,
product_code VARCHAR(9) UNIQUE NOT NULL,
product_name VARCHAR(100) NOT NULL,
product_description VARCHAR(255) NOT NULL,
product_price DECIMAL(10,2) NOT NULL,
product_quantity INT NOT NULL,
product_category VARCHAR(24) NOT NULL,
product_img VARCHAR(24) NOT NULL,
product_rating SMALLINT
);

INSERT INTO product (product_code, product_name, product_description, product_price, product_quantity, product_category, product_img, product_rating)
VALUES 
    ('f230fh0g3', 'Bamboo Watch', 'Product Description', 28.90, 25, 'Accessories', 'img001.jpg', 4),
    ('nvklal433', 'gold ring', 'Product Description', 45.00, 36, 'Accessories', 'img002.jpg', 8),
    ('zz21cz3c1', 'Red Hat', 'Product Description', 13.90, 0, 'Clothing', 'img003.jpg', 9),
    ('244wgerg2', 'Gaming Set', 'Product Description', 125.49, 7, 'Electronics', 'img004.jpg', 2),
    ('av2231fwg', 'Yoga Mat', 'Product Description', 39.99, 25, 'Fitness', 'img005.jpg', 8);