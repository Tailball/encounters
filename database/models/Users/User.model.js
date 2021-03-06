const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    accountname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: false
    }
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;