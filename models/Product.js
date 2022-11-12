const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
    },
    image: {
        type: String,
        required: true,
        validate: function (value) {
            if (!value.startsWith('http')) {
                throw new Error('image: The image must start with "http"');
            };
        }
    },
    price: {
        type: Number,
        required: true,
        min: 1,
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
        min: 1,
        max: 5,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    }
});

const Product = mongoose.model(
    'products',
    productSchema,
);

module.exports = Product;