var cartRouter = require('express').Router();
var cartController = require('../controller/cart.controller');


cartRouter.route('/cart')
.get(cartController.retrieve)
.post(cartController.createOne)
.delete(cartController.deleteAll)



cartRouter.route('/:id')
.get(cartController.retrieveOne)
.put(cartController.updateOne)
.delete(cartController.deleteOne)

module.exports = cartRouter;