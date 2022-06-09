const AuthService = require('./auth.service');
module.exports.register = (req, res) => {
    const data = req.body;
    const user = AuthService.register(data);
    res.send(user);
}

module.exports.login = (req, res) => {
    const data = req.body;
    const session = AuthService.login(data);
    if(!session) {
        res.status(404).send("User not found!");
    } else {
        res.send(session)
    }
}

/** TODO: Delete this function or put it in users module **/ 
module.exports.list = (req, res) => {
    res.send(AuthService.listUsers());
}
