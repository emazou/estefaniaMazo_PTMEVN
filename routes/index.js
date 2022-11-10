const express = require('express');

const userRouter = require('./auth');

function indexRouter(app){
    const router = express.Router();
    app.use('/', router);
    router.use('/auth',userRouter);
}

module.exports = indexRouter;