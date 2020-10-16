const mongoose = require('mongoose');

const MonsterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cr: {
        type: Number,
        required: true
    },
    xp: {
        type: Number,
        required: true
    },
    source: {
        type: String,
        required: false
    },
    initiative: {
        type: Number,
        required: false
    }
});

module.exports = MonsterSchema;