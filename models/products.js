const mongoose = require('mongoose')

const ProductosSchema = new mongoose.Schema({

    type: { type: String },
    description: { type: String },
    color: { type: String },
    marca: { type: String },
    size: { type: Number },
    stock: { type: Number },
    sport: { type: String }

});

const Products = mongoose.model('product', ProductosSchema)
module.exports = Products

