var productRouter = require('express').Router();
var productController = require('../controller/prod.controller');


productRouter.route('/prod')
.get(productController.retrieve)
.post(productController.createOne)

productRouter.route("/Category")
.get(productController.retrieveOneByCategory)

productRouter.route('/:id')
.get(productController.retrieveOne)
.put(productController.updateOne)
.delete(productController.deleteOne)

module.exports = productRouter;