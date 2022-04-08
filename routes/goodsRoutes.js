const goodsRouter = require('express').Router();

const productsControllers = require('../controllers/productsControllers')

const { getAllProducts, getAllProductsBrand, addProduct, modifyProduct, deleteProduct, seeProductForId } = productsControllers

goodsRouter.route('/allGoods')
    .get(getAllProducts)
    .post(addProduct)
goodsRouter.route('/allGoods/brand/:id')
    .get(getAllProductsBrand)
    

goodsRouter.route('/allGoodsId/:id')
.get(seeProductForId)
.delete(deleteProduct)
/* .put(modifyProduct) */

module.exports = goodsRouter

