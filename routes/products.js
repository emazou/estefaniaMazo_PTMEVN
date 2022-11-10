const router = require('express').Router();
const { deleteProduct,getProducts, createProduct, modifyProduct } = require('../controllers/productController');
const passport = require('../config/passport');

router.route('/')
    .post(passport.authenticate('jwt', { session: false }), createProduct) 
    .get(passport.authenticate('jwt', { session: false }), getProducts);

router.route('/:id')
    .delete(passport.authenticate('jwt', { session: false }), deleteProduct)
    .patch(passport.authenticate('jwt', { session: false }), modifyProduct)

module.exports = router;