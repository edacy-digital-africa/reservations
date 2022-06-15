const users = [
    { id: 1, username: 'bobly', password: '1234', role: 'ADMIN' },
    { id: 2, username: 'james', password: '123', role: 'USER' },
    { id: 3, username: 'franc', password: '12345', role: 'USER' },
]
const User = require('./users.schema');

module.exports.insertOne = async (userInput) => {
    const user = { ...userInput, role: 'USER' };
    const result = await User.create(user);
    return result;
}

module.exports.findOneByUsername = async (username) => {
    const result = await User.findOne({ username: username });
    return result;
}

module.exports.list = async () => {
    const result = await User.find();
    return result;
}