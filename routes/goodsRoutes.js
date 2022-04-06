const goodsRouter = require('express').Router();

const productsControllers = require('../controllers/productsControllers')

const { getAllProducts, addProduct, modifyProduct, deleteProduct, seeProductForId } = productsControllers

goodsRouter.route('/allGoods')
    .get(getAllProducts)
    .post(addProduct)

goodsRouter.route('/allGoodsId/:id')
    .delete(deleteProduct)
    .put(modifyProduct)
    .get(seeProductForId)

module.exports = goodsRouter