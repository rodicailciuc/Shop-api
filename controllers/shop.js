import Shop from '../models/shop.js';
import userControllers from './user.js';

const shopControllers = {
    getAllProducts: (req, res) => {
        const products = Shop.getAll();
        const token = req.cookies.token;
        const email = req.cookies.email;
        res.status(200).render('products', { products, token, email });
    },
    getProductById: (req, res) => {
        const { id } = req.params;
        const product = Shop.getById(id);
        if (product) {
            res.status(200).render('product', { product });
        } else {
            res.status(404).render('404', {
                title: 'Product not found',
                message: 'Product not found'
            });
        }
    },
    getAddProductForm: (req, res) => {
        res.status(200).render('add-product');
    },
    addProduct: (req, res) => {
        const { name, price, description, img } = req.body;
        if (name && price && description && img) {
            Shop.add({ name, price, description, img });
            res.status(302).redirect('/api/products');
        } else {
            res.status(400).render('404', {
                title: 'Bad request',
                message: 'All fields are required'
            });
        }
    }
};

export default shopControllers;
