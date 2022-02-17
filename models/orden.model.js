const { Schema, model, Document } = require("mongoose");

const orderSchema = new Schema({
    code: {
       type: Number
    },
    address: {
        type: String
    },
    //usuario: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    products: [{
        image: {
            type: String
        },
        name: {
                type: String
        }, 
        price: {
                type: String
        },
        quantity: {
                type: Boolean
        },
        active: {
            type: Boolean,
            default: true
        }
    }],
    status: {
        type: Boolean,
        default: true
    },
    order_status: {
        type: String,
        default: 'Pendiente'
    },
    created_at: {
        type: Date
    },
    
});


orderSchema.pre('save', function(){
    this.created_at = new Date();
  });

const Order = model('Order', orderSchema);

module.exports = Order;
