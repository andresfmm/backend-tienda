const  { Router } = require("express");
const { crearProduct } = require("../controllers/product.controller");

const Product = Router();

Product.post('/', crearProduct);

module.exports = Product;