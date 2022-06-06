const ReservationRepository = require('./reservations.repository');
const reservations = [
    {
        id: 1,
        clientId: 1,
        productId: 2,
        count: 2,
        amount: 100
    },
    {
        id: 2,
        clientId: 3,
        productId: 1,
        count: 1,
        amount: 50
    }
];
module.exports.findAll = function findAll(req, res) {
    const result = reservations.map((reservation) => new ReservationRepository(reservation));
    res.send(result);
}

module.exports.findOne = function findOne(req, res) {
    const reservationId = req.params.id;
    const reservation = reservations.find((resa) => resa.id == reservationId);
    res.send(new ReservationRepository(reservation));
}

module.exports.deleteOne = function deleteOne(req, res) {
    const reservationId = req.params.id;
    const index = reservations.findIndex((resa) => resa.id == reservationId);
    reservations.splice(index, 1);
    res.send(true);
}

module.exports.insertOne = (req, res) => {
    const reservation = {...req.body, clientId: req.user.id};
    reservations.push(reservation);
    res.send(reservation);
}