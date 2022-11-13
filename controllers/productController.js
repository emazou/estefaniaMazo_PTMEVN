const Product = require('../models/Product');

const productController = {
    getProducts: async (req, res) => {
        const user = req.user.id;
        const query = {
            user,
        };
        if (req.query.name) {
            const queryString = new RegExp(`^${req.query.name}`);
            query.name = { $regex: queryString, $options: 'ix' };
        };
        if (req.query.id) {
            query._id = req.query.id
        };
        try {
            const products = await Product.find(query)
                .populate('user', { name: 1, lastName: 1, image: 1 })
            if (products) {
                res.status(200).json({
                    message: 'You get products',
                    response: products,
                    success: true,
                });
            } else {
                res.status(404).json({
                    message: "Could't find products",
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
    createProduct: async (req, res) => {
        const { name, image, price, rating } = req.body;
        const user = req.user.id;
        try {
            await new Product({ name, image, price, rating, user }).save();
            res.status(201).json({
                message: 'Created product',
                success: true,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false,
            });
        };
    },
    deleteProduct: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await Product.findOneAndDelete({ _id: id });
            if (product) {
                res.status(200).json({
                    message: 'Product deleted',
                    success: true
                });
            } else {
                res.status(404).json({
                    message: "Could't find product",
                    success: false
                });
            };
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false,
            });
        }
    },
    modifyProduct: async (req, res) => {
        const { id } = req.params;
        const updateProduct = req.body;
        try {
            const product = await Product.findOneAndUpdate({ _id: id }, updateProduct, { new: true });
            if (product) {
                res.status(200).json({
                    message: 'Modified product',
                    response: product,
                    success: true
                });
            } else {
                res.status(404).json({
                    message: "Could't find city",
                    success: false
                });
            };
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false,
            });
        };
    }
};
module.exports = productController;