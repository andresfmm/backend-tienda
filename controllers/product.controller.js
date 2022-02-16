const { response } = require('express');
const { subirArchivo } = require('../helpers/subir-archivo');

const ProductModel = require('../models/product.model');

const crearProduct = async( req, res = response ) => {
      
    try {

        const { product_name, product_description, product_price } = req.body;


        const productExist = await ProductModel.findOne({ product_name: product_name});

        console.log(productExist)

        if(productExist) {
           return res.status(200).json({
                ok: false,
                msg: 'El producto ya se encuentra registrado',
            });
        }

        const carpeta = 'productos';
        const name_file =  await subirArchivo(req.files, carpeta);


        

         const data = {
            product_src:         name_file,
            product_name:        product_name,
            product_description: product_description,
            product_price:       product_price,
            product_status:      1,
         }

         const productModel = new ProductModel(data);

         await productModel.save();

         res.status(200).json({
            ok: true,
            msg: 'producto creado',
        });
        
    } catch (msg) {
        console.log(msg)
        res.status(200).json({
            ok: false,
            msg: 'Consulte al administrador del sistema',
        });
    }

    
}


module.exports = {
    crearProduct
}