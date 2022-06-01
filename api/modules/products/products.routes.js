module.exports = function(app) {
    const Ctrl = require('./products.controller');

    app.route('/products')
      .get(Ctrl.findAll)
      .post(Ctrl.insertOne);

      app.route('/products/:id')
      .put(Ctrl.update)
      .get(Ctrl.findOne)
      .delete(Ctrl.deleteOne)
      
  };