const { Router } = require('express');
const { cargarArchivo } = require('../controllers/upload.controller');

const Uploads = Router();

Uploads.post('/', cargarArchivo);



module.exports = {
    Uploads
}
