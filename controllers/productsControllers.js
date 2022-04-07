const Products = require('../models/products')



const productsControllers = {
    getAllProducts: async (require, response) => {
        var products
        var error = null

        try {
            products = await Products.find()
        } catch (err) {
            error = err
            console.log(error);
        }
        response.json({

            respuesta: error ? 'ERROR' : { products },
            success: error ? false : true,
            error: error
        })

    },
    addProduct: async (required, response) => {

        const { tipo, description, image, price, brand, color, size, stock, sportType, genre, sale
        } = required.body
        new Products({
            tipo, description, image, price, brand, color, size, stock, sportType, genre, sale
        }).save()
            .then((respuesta) => response.json({ respuesta }))
            .catch(error => response.json({ error }))
    },
    modifyProduct: async (req, res) => {
        const id = req.params.id
        const ProductsLocal = req.body

        var productLocal
        productLocal = await Products.findOneAndUpdate({ _id: id }, ProductsLocal, { new: true })
            .then((response) => res.json({ paso: "listo", respuesta: response }))
            .catch(error => res.json({ error }))
    },
    deleteProduct: async (required, response) => {
        const id = required.params.id

        var deleteProduct

        deleteProduct = await Products.findOneAndDelete({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },
    seeProductForId: async (require, response) => {
        const id = require.params.id
        var ProductsLocal



        ProductsLocal = await Products.findOne({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },
}

module.exports = productsControllers