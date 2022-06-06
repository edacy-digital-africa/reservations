const users = [
    { id: 1, username: 'bobly', password: '1234', role: 'ADMIN' },
    { id: 2, username: 'james', password: '123', role: 'USER' },
    { id: 3, username: 'franc', password: '12345', role: 'USER' },
]

module.exports.insertOne = (userInput) => {
    const user = { ...userInput, role: 'USER', id: users.length + 2 };
    users.push(user);
    return user;
}

module.exports.findOneByUsername = (username) => {
    return users.find((user) => user.username === username);
}

module.exports.list = () => {
    return users;
}