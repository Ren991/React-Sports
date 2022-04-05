const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({

    type: { type: String },
    description: { type: String },
    color: { type: String },
    brand: { type: String },
    size: { type: Number },
    stock: { type: Number },
    sportType: { type: String },
    genre: { type: String },
    sale: { type: String },
    image: { type: String }

});

const Products = mongoose.model('producto', ProductsSchema)
module.exports = Products
