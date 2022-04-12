const { ObjectId } = require('mongodb');
const Products = require('../models/products')



const productsControllers = {
    getAllProducts: async (require, response) => {
        var products
        var error = null

        try {
            // AGREGUE EL POPULATE
            products = await Products.find().populate('brand')
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
        /*         const Brand = ObjectId(brandId) */
        console.log(brandId);



        var error = null
        var brandsLocal

        try {
            brandsLocal = await Products.find({ brand: brandId })
            /*       console.log(brandsLocal); */
        } catch (err) {
            error = err
            console.log(error);
        }
        response.json({

            respuesta: error ? 'ERROR' : { brandsLocal },
            success: error ? false : true,
            error: error
        })

    },
    addProduct: async (required, response) => {

        console.log("Loaded")
        console.log(required.body)

        const { productName, sport, description, color, stock, image, price, genre, brand } = required.body

        new Products({ productName, sport, description, color, stock, image, price, genre, brand }).save()
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

    seeProductForGender: async (require, response) => {
        const gender = require.params.gender
        var ProductsLocal
        console.log(typeof (gender));
        console.log(gender);


        ProductsLocal = await Products.find({ genre: gender })

            .then((res) => response.json({ paso: "producto encontrado", respuesta: res }))
            .then(console.log(ProductsLocal))
            .catch(error => response.json({ paso: "no existe", error }))
    },
    // tipo un string o arraY?,
    /*     modifyProduct: async (req, res) => {
            const id = req.params.id
            const ProductsLocal = req.body
    
            var productLocal
            productLocal = await Products.findOneAndUpdate({ _id: id }, ProductsLocal, { new: true })
                .then((response) => res.json({ paso: "listo", respuesta: response }))
                .catch(error => res.json({ error }))
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
        seeProductForGender: async (require, response) => {
            const gender = require.params.gender
            var ProductsLocal
            console.log(typeof (gender));
            console.log(gender);
    
    
            ProductsLocal = await Products.find({ genre: gender })
    
                .then((res) => response.json({ paso: "producto encontrado", respuesta: res }))
                .then(console.log(ProductsLocal))
                .catch(error => response.json({ paso: "no existe", error }))
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