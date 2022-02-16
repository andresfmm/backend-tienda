const mongoose = require('mongoose');

const dbConnection = async () => {
    
     try {

        // CONEXION PARA BASE DE DATOS
        // mongoose.connect('mongodb://localhost:27017/tienda', 
        mongoose.connect(process.env.MONGOO_CONEXION, 
        { 
        useNewUrlParser: true,
        useUnifiedTopology: true}
        ,
        ( err ) => {
            if( err ) throw err;
            console.log('base de datos conectada');
        });
         
     } catch (error) {
         console.log(error)
     }
}

module.exports = {
    dbConnection
}