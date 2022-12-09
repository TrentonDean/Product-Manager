const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/products', ProductController.createProduct);            
    app.get('/products', ProductController.getAllProducts);
    app.get('/:id', ProductController.getOneProduct);
    app.put('/edit/:id', ProductController.updateProduct);
    app.delete('/delete/:id', ProductController.deleteProduct);
}