const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({



    tipo: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    color: { type: String },
    size: { type: Number },
    stock: { type: Number },
    sportType: { type: String },
    genre: { type: String },
    sale: { type: Boolean }

});

const Products = mongoose.model('producto', ProductsSchema)
module.exports = Products


