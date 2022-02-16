const path = require('path');
const { v4: uuid } = require('uuid');


 const subirArchivo = ( files, carpeta, extensiones_permitidas = ['png','jpg','jpeg','gif']) => {

    return new Promise ( (resolve, reject) => {
         
        if (!files || Object.keys(files).length === 0 ) {
            return reject( 'Debe subir un archivo .' );
        }
        
        const { archivo } = files;
        const divididos_por_punto = archivo.name.split(".");
        const extension = divididos_por_punto[ divididos_por_punto.length -1 ].toLowerCase();


        if (!extensiones_permitidas.includes(extension)) {
           return reject( ` La extension no es valida debe subir una extension tipo ${extensiones_permitidas}  ` );
        }
        
        
        
        const file_name = uuid()+'.'+extension;
        
        const uploadPath = path.join( __dirname, '../uploads/', carpeta, file_name );
        
        archivo.mv(uploadPath, function(err) {
            if (err){
                return  reject(err)
            }
                    
            resolve(file_name);
        });
            
    });
}


module.exports = {
    subirArchivo
}


