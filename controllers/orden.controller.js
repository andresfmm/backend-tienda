const { response } = require('express');
const Order = require('../models/orden.model');

const CrearOrden = async( req, res = response ) => {
    try {
        const { direccion, orden  } = req.body;
        
        const cliente_orden = {
            code: Math.random().toString().substr(2, 10),
            adrress: direccion,
            products: orden
        }

        const order = new Order(cliente_orden);
        await order.save();
        
        res.status(200).json({
            ok: true,
            msg: 'Orden creada pronto recibira sus articulos',
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Consulte al administrador del sistema',
        });
    }
}


module.exports = {
    CrearOrden
}