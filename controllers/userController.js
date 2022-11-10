const User = require('../models/User');
const crypto = require('crypto');
const bcryptjs = require('bcryptjs');
const sendMail = require('./sendMail');
const jwt = require("jsonwebtoken");

const userController = {
    signUp: async (req, res) => {
        const { name, lastName, email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                try {
                    const code = crypto.randomBytes(15).toString('hex');
                    const hashPassword = bcryptjs.hashSync(password, 10);
                    await new User({
                        name,
                        lastName,
                        password: hashPassword,
                        email,
                        code
                    }).save();
                    sendMail(email, code);
                    res.status(201).json({
                        message: 'Successful registration',
                        success: true,
                    })
                } catch (error) {
                    res.status(400).json({
                        message: error.message,
                        success: false,
                    });
                };
            } else {
                res.status(200).json({
                    message: 'User already exist',
                    success: false,
                });
            };
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false,
            });
        };
    },
    signIn: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                res.status(404).json({
                    message: "User doesn't exists, please sign up",
                    success: false,
                });
            } else if (user.verified) {
                const checkPassword = bcryptjs.compareSync(password, user.password);
                if (checkPassword) {
                    const loginUser = {
                        id: user._id,
                        name: user.name,
                        lastName: user.lastName,
                        email: user.email,
                        image: user.image,
                    };
                    user.logged = true;
                    await user.save();
                    const token = jwt.sign(
                        {
                            id: user._id,
                        },
                        process.env.KEY_JWT,
                        { expiresIn: 60 * 60 * 24 }
                    );
                    res.status(200).json({
                        message: 'Welcome ' + user.name,
                        response: { token: token, user: loginUser },
                        success: true,
                    });
                } else {
                    res.status(400).json({
                        message: 'Password incorrect',
                        success: false,
                    });
                }
            } else {
                res.status(401).json({
                    message: 'Please, verify your email account and try again',
                    success: false,
                });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: 'Sign In error, try again later',
                success: false,
            });
        }
    },
    signOut: async (req, res) => {
        let { email } = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
                user.logged = false;
                await user.save();
                res.status(200).json({
                    message: 'Sign Out successfully',
                    success: true,
                });
            } else {
                res.status(404).json({
                    message: 'Email has no account yet',
                    success: false,
                });
            }
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false,
            });
        }
    },
    verifyMail: async (req, res) => {
        const { code } = req.params;
        try {
            let user = await User.findOne({ code });
            if (user) {
                user.verified = true;
                await user.save();
                res.redirect(process.env.CLIENT_URL);
            } else {
                res.status(404).json({
                    message: 'Email has no account yet',
                    success: false,
                });
            };
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: "Could't verify account",
                success: false,
            });
        }
    },
};

module.exports = userController;