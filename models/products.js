const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
    type: { type: String, required: true }, //botin , zapatilla, etc
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Number, required: true }, //talla
    stock: { type: Number, required: true },
    color: { type: String }, // tipo un string o arraY?,
    sport: { type: String, required: true },
    //renzo
    productName: { type: String, required: true },
    genre: { type: String, required: true },
    //otraColeccion de marcas
    brand: { type: mongoose.Schema.Types.String, ref: 'brand' }

});

const Products = mongoose.model('products', ProductsSchema)
module.exports = Products


