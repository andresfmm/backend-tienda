
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


const  User  = require('../routes/user');
const  Product  = require('../routes/product');

const { dbConnection } = require('../database/dbConnection');
const { Orden } = require('../routes/orden');


class Server{
   
      constructor() {
          this.app = express();
          this.conexionDb();

          this.paths = {
             user: '/api/v1/user',
             product: '/api/v1/product',
             orden: '/api/v1/orden',
          }

          this.middlewares();
          this.routes();
          
      }

      async conexionDb(){
          await dbConnection();
      }

      middlewares() {
          this.app.use('/uploads', express.static(process.cwd() + '/uploads'));
          this.app.use(bodyParser.json())
          this.app.use(bodyParser.urlencoded({ extended: true }));
          
          
          
          this.app.use( cors() );

          this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true,
          }));
      }

      routes(){

        this.app.use(this.paths.user,  User);
        this.app.use(this.paths.product,  Product);
        this.app.use(this.paths.orden,  Orden);
        
      }

      listen(){
        this.app.listen( process.env.PORT, () => {
            console.log('puerto corriendo en ', process.env.PORT )
         });
      }
}


module.exports = Server;