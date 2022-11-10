const router = require('express').Router();

const { signUp, verifyMail, signOut, signIn } = require('../controllers/userController');

router.route('/sign/up')
    .post(signUp)

router.route('/sign/in')
    .post(signIn)

router.route('/sign/out')
    .post(signOut) 

router.route('/verify/:code')
    .get(verifyMail)

router.route('/:id')
    .get()
    .patch()

module.exports = router
