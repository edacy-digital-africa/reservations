module.exports = function(app) {
    const Ctrl = require('./products.controller');

    app.route('/products')
      .post(Ctrl.insertOne);

      app.route('/products/:id')
      .put(Ctrl.update)
      .delete(Ctrl.deleteOne)
      
  };