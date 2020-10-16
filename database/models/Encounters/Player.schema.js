const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    level: {
        type: Number,
        required: true
    }
});

module.exports = PlayerSchema;