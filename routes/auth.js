const router = require('express').Router();
const passport = require('../config/passport');
const { signUp, verifyMail, signOut, signIn, verifyToken } = require('../controllers/userController');

router.route('/sign/up')
    .post(signUp)

router.route('/sign/in')
    .post(signIn)

router.route('/sign/out')
    .post(signOut) 

router.route('/verify/:code')
    .get(verifyMail)

router.route('/token')
    .get(passport.authenticate('jwt', { session: false }), verifyToken)

module.exports = router
