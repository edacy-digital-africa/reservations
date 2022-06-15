const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    role: { type: String }
});

const model = mongoose.model('user', userSchema);
module.exports = model;