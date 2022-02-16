const  { Router } = require("express");
const comparePass = require("../helpers/comparePass");
const encryptPass = require("../helpers/encryptPass");
const { getJwtToken } = require("../helpers/token");
const UserModel = require("../models/user.model");

const User = Router();

User.post('/login', async(req, res) => {
     
     const { body } = req;
     

     const data = {
         user_email: body.email
     }
    
     
          

      UserModel.findOne( data ).then( ( respDB, err ) => {

            if (err) return;
            
            
            if ( comparePass( body.password,  respDB.user_password ) ) {

                let token = {
                    uuid: respDB._id,
                    email:  respDB.email_estudiante,
                    rol:  respDB.user_rol
                }

                res.json({
                    ok: true,
                    msg: '',
                    token: getJwtToken(token),
                    status: 'authenticated',
                     user: {
                        userName : respDB.user_name,
                        email: respDB.user_email,
                        isAdmin: respDB.user_rol
                     }
                })
            } else {
                res.json({
                    ok: false,
                    msg: 'Usuario o password incorrectos',
                    token: '',
                     user: {
                        userName : '',
                        email: '',
                        isAdmin: ''
                     }
                })
            }

            
      })
      .catch( err => {
            res.json({
                ok: false,
                    msg: 'Consulte al administrador del sistema',
                    token: '',
                     user: {
                        userName : '',
                        email: '',
                        isAdmin: ''
                     }
            })
      })
      
});





User.post('/resigtro', async(req, res) => {
     
    const { body } = req;

     
    const encryp_pass = await encryptPass(body.password)

    const data = {
        user_name: body.username,
        user_email: body.email,
        user_password: encryp_pass,
        status: 1,
        user_rol: 'standar'
    }
   
    
     UserModel.create( data ).then( ( respDB, err ) => {

           if (err) return;

           res.json({
            ok: true,
            msg: '',
          })
           
           
     })
     .catch( err => {

       

       switch (err.code) {
           case 11000:
                res.json({
                    ok: false,
                    msg: 'Este email ya se encuentra registrado',
                })
               break;
       
           default:
                res.json({
                    ok: false,
                    msg: 'Consulte al administrador del sistema',
                })
               break;
       }
           
     });
     
});



module.exports =  User;