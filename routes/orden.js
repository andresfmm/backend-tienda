const  { Router } = require("express");
const { CrearOrden } = require("../controllers/orden.controller");


const Orden = Router();

Orden.post('/', CrearOrden);


module.exports = {
    Orden
}