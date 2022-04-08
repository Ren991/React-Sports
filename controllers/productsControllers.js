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
    getAllProductsBrand: async (require, response) => {
        const brandId = require.params.id
        var error = null

        try {
            brands = await Products.find({ brand: brandId })
        } catch (err) {
            error = err
            console.log(error);
        }
        response.json({

            respuesta: error ? 'ERROR' : { brands },
            success: error ? false : true,
            error: error
        })

    },
    addProduct: async (required, response) => {

        const { type, description, image, price, size, stock, sport, productName, genre, brand } = required.body
        console.log(required.body)
        new Products({ type, description, image, price, size, stock, sport, productName, genre, brand }).save()
            .then((respuesta) => response.json({ respuesta }))
            .catch(error => response.json({ error }))
    },
    seeProductForId: async (require, response) => {
        const id = require.params.id
        var ProductsLocal



        ProductsLocal = await Products.findOne({ _id: id })
            .then((res) => response.json({ paso: "producto encontrado", respuesta: res }))
            .catch(error => response.json({ paso: "no existe", error }))
    },

    deleteProduct: async (required, response) => {
        const id = required.params.id

        var deleteProduct

        deleteProduct = await Products.findOneAndDelete({ _id: id })
            .then((res) => response.json({ paso: "eliminado", respuesta: res }))
            .catch(error => response.json({ paso: "porfavor vuelva a intentarlo mas tarde", error }))
    },
    // tipo un string o arraY?,
    /*     modifyProduct: async (req, res) => {
            const id = req.params.id
            const ProductForModify = req.body
    
            var productLocal
            productLocal = await Products.findOneAndUpdate({ _id: id }, ProductForModify, { new: true })
                .then((response) => res.json({ paso: "listo", respuesta: response }))
                .catch(error => res.json({ error }))
        },
        }, */
}

module.exports = productsControllers