const Productos = require('../models/products')

const productosControladores = {
    consultarProductos: async (require, response) => {
        var ciudades
        var error = null

        try {
            ciudades = await Productos.find()
        } catch (err) {
            error = err
            console.log(error);
        }
        response.json({

            respuesta: error ? 'ERROR' : { ciudades },
            success: error ? false : true,
            error: error
        })

    },
    agregarProducto: async (required, response) => {

        const { tipo, descripcion, color, marca, talle, stock, deporte } = required.body
        new Productos({
            tipo, descripcion, color, marca, talle, stock, deporte
        }).save()
            .then((respuesta) => response.json({ respuesta }))
            .catch(error => response.json({ error }))
    },
    modificarProducto: async (req, res) => {
        const id = req.params.id
        const ciudad = req.body

        var ciudadb
        ciudadb = await Productos.findOneAndUpdate({ _id: id }, ciudad, { new: true })
            .then((response) => res.json({ paso: "listo", respuesta: response }))
            .catch(error => res.json({ error }))
    },
    borrarProducto: async (required, response) => {
        const id = required.params.id

        var ciudadEliminada

        ciudadEliminada = await Productos.findOneAndDelete({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },
    consultarProductosPorId: async (require, response) => {
        const id = require.params.id
        var ProductosLocal



        ProductosLocal = await Productos.findOne({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },
}

module.exports = productosControladores