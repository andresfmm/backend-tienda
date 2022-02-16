const bcrypt = require('bcrypt');

const encryptPass = async ( pass ) => {
    
    //debe se entero por eso se pome el simbolo de suma opcional a parseInt
    let pwd = await bcrypt.hash(pass, +process.env.SALT_ROUNDS);

    return pwd;

}


module.exports = encryptPass;