const UsersService = require('../users/users.service');
const jwt = require('jsonwebtoken');
module.exports.register = ({ username, password }) => {
    return UsersService.insertOne({ username, password });
}

module.exports.login = async ({ username, password }) => {
    let user = await UsersService.findOneByUsername(username);
    
    if(!user || user.password !== password) {
        return null;
    } else {
        user = { ...user.toObject() };
        delete user.password;
        const token = jwt.sign(user, 'digitalAfricaKey', { expiresIn: 60 * 60 });
        return { user, token };
    }
}

module.exports.verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'digitalAfricaKey', (error, decoded) => {
            if(error) {
                reject(error);
            } else {
                resolve(decoded);
            }
        })
    })
}



module.exports.listUsers = async () => {
    return await UsersService.list();
}
