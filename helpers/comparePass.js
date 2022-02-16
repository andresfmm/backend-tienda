const bcrypt = require('bcrypt');

const comparePass = (password, hash) => {

    if(bcrypt.compareSync(password, hash)) {
         return true;
       } else {
         return false;
    }
     
   
} 


module.exports = comparePass;
