const  { Router } = require("express");
const { crearProduct, getProducts } = require("../controllers/product.controller");

const Product = Router();

Product.post('/', crearProduct);

Product.get('/', getProducts);

module.exports = Product;