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
module.exports.findAll = function findAll() {
    return reservations;
}

module.exports.findOne = function findOne(reservationId) {
    return reservations.find((resa) => resa.id == reservationId);
}

module.exports.deleteOne = function deleteOne(reservationId) {
    const index = reservations.findIndex((resa) => resa.id == reservationId);
    reservations.splice(index, 1);
    return true;
}

module.exports.insertOne = (reservation) => {
    reservations.push(reservation);
}