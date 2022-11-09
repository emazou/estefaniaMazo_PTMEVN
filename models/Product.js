const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    price: {
        type: Number,
        required: true,
        min: 1,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    date: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    }
});
const Product = mongoose.model(
    "products",
    productSchema
);
module.exports = Product;