const Products = require('../models/products')

const productosControladores = {
    consultarProductos: async (require, response) => {
        var ciudades
        var error = null

        try {
            ciudades = await Products.find()
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

        const { type, description, color, brand, size, stock, sportType, genre, sale, image } = required.body
        new Products({
            type, description, color, brand, size, stock, sportType, genre, sale, image
        }).save()
            .then((respuesta) => response.json({ respuesta }))
            .catch(error => response.json({ error }))
    },
    modificarProducto: async (req, res) => {
        const id = req.params.id
        const ciudad = req.body

        var ciudadb
        ciudadb = await Products.findOneAndUpdate({ _id: id }, ciudad, { new: true })
            .then((response) => res.json({ paso: "listo", respuesta: response }))
            .catch(error => res.json({ error }))
    },
    borrarProducto: async (required, response) => {
        const id = required.params.id

        var ciudadEliminada

        ciudadEliminada = await Products.findOneAndDelete({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },
    consultarProductosPorId: async (require, response) => {
        const id = require.params.id
        var ProductosLocal



        ProductosLocal = await Products.findOne({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },
}

module.exports = productosControladores