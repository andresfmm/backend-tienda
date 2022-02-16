const { Schema, model, Document } = require("mongoose");


const  loginSchema = new Schema({
    user_name: {
        type: String
    },
    user_email: {
        type: String,
        unique: true
      },
    user_rol: {
        type: String
    },
    status: {
      type: Boolean
    },
    user_password: {
      type: String
    },
    created_at: {
        type: Date
    },
    
  });

  loginSchema.pre('save', function(){
    this.created_at = new Date();
  });

 const UserModel = model('Users', loginSchema);

 module.exports = UserModel;