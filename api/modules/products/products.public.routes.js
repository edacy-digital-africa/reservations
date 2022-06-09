module.exports = function(app) {
    const Ctrl = require('./products.controller');

    app.route('/products')
      .get(Ctrl.findAll)

      app.route('/products/:id')
      .get(Ctrl.findOne)
      
  };