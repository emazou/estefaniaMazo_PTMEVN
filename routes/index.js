const express = require('express');

function indexRouter(app){
    const router = express.Router();
    app.use('/', router);
}

module.exports = indexRouter;