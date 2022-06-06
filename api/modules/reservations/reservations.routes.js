module.exports = (app) => {
    const Ctrl = require('./reservations.controller');

    app.route('/reservations')
    .get(Ctrl.findAll)
    .post(Ctrl.insertOne)

    app.route('/reservations/:id')
    .get(Ctrl.findOne)
    .delete(Ctrl.deleteOne)
}