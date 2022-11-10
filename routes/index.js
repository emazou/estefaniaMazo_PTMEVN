const express = require('express');

const usersRouter = require('./auth');
const productsRouter = require('./products') 
function indexRouter(app){
    const router = express.Router();
    app.use('/', router);
    router.use('/auth',usersRouter);
    router.use('/products', productsRouter)
}

module.exports = indexRouter;