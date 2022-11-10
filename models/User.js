const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function (value) {
            if (!value.endsWith('com')) {
                throw new Error('INVALID_EMAIL')
            };
        },
    },
    image: {
        type: String,
        default: 'https://i.ibb.co/80Xjm2w/usuario.png',
        required: true,
        validate: function (value) {
            if (!value.startsWith('http')) {
                throw new Error('INVALID_URL');
            };
        }
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    logged: {
        type: Boolean,
        default: false,
        required: true
    },
    verified: {
        type: Boolean,
        default: false,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

const User = mongoose.model(
    'users',
    userSchema,
);

module.exports = User;