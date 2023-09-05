const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const orderSchema = new Schema({
    
    name: {
        type: String
        
    },
    batchID:{
        type: Number
    },
    quantity:{
        type: Number
    },
})

const order = mongoose.model("order",orderSchema);

module.exports = order;