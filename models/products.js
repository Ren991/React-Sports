const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({



    type: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: mongoose.Types.ObjectId, ref: 'brand' },
    color: { type: String },
    size: { type: Number },
    stock: { type: Number },
    sportType: { type: String },
    genre: { type: String },


});

const Products = mongoose.model('producto', ProductsSchema)
module.exports = Products


