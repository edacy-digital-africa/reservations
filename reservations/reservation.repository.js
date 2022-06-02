const products = require('../api/modules/products/products.controller').products;
module.exports = class ReservationRepository {
    id;
    clientId;
    productId;
    count;
    amount;
    product;
    constructor(data) {
        Object.assign(this, data);
        this.product = products.find((p) => p.id == this.productId);
    }
}