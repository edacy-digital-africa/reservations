const products = [];

module.exports.findAll = (req, res) => {
    res.json(products)
}

module.exports.findOne = (req, res) => {
    const id = req.params.id;
    const product = products.find((p) => p.id == id)
    res.json(product)
}

module.exports.insertOne = (req, res) => {
    products.push(req.body);
    res.json(req.body)
}

module.exports.deleteOne = (req, res) => {
    res.json({ status: true })
}

module.exports.update = (req, res) => {
    const id = req.params.id;
    const product = products.find((p) => p.id == id)
    res.json(product)
}
