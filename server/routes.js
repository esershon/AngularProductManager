const controller = require('./controller')
const path = require('path')

module.exports = function(app){
    app.get('/api/products', controller.getAllProducts);
    app.get('/api/products/:id', controller.getProduct);
    app.post('/api/products', controller.createProduct);
    app.put('/api/products/:id', controller.updateProduct);
    app.delete('/api/products/:id', controller.deleteProduct);
    app.all("*", (req,res,next) => res.sendFile(path.resolve("./public/dist/public/index.html")))
}