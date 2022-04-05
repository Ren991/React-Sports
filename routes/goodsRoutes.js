const goodsRouter = require('express').Router();

const productsControllers = require('../controllers/products')

const { consProducts, addProduct, modifyProduct, deleteProduct, seeProductForId } = productsControllers

goodsRouter.route('/allGoods')
    .get(consProducts)
    .post(addProduct)

goodsRouter.route('/allGoodsId/:id')
    .delete(deleteProduct)
    .put(modifyProduct)
    .get(seeProductForId)

module.exports = goodsRouter