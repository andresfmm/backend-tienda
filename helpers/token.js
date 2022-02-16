
const jwt = require('jsonwebtoken');

let seed = 'nbhjgBVGHfyughvJVJhghv765hv';
let caducidad = '24h';

const getJwtToken = ( payload ) => {

   return jwt.sign({
       usuario: payload
   },  seed, { expiresIn: caducidad } );
} 

module.exports = {
    getJwtToken
};