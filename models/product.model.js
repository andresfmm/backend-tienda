const { Schema, model, Document } = require("mongoose");


const  productSchema = new Schema({
    product_src: {
        type: String
    },
    product_name: {
        type: String,
        unique: [true, 'este producto ya se encuentra registrado']
    },
    product_description: {
        type: String
      },
    product_price: {
        type: String
    },
    product_status: {
      type: Number
    },
    created_at: {
        type: Date
    },
    
  });

  productSchema.pre('save', function(){
    this.created_at = new Date();
  });

 const ProductModel = model('Products', productSchema);

 module.exports = ProductModel;