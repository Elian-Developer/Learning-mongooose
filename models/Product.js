const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        default: 0
    }
})

module.exports = model('product', ProductSchema )