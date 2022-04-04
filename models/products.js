const mongoose = require('mongoose')

const ProductosSchema = new mongoose.Schema({

    tipo: { type: String },
    descripcion: { type: String },
    color: { type: String },
    marca: { type: String },
    talle: { type: Number },
    stock: { type: Number },
    deporte: { type: String }

});

const Productos = mongoose.model('producto', ProductosSchema)
module.exports = Productos