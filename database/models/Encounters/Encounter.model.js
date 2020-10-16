const mongoose = require('mongoose');

const playerSchema = require('./Player.schema');
const monsterSchema = require('./Monster.schema');


const EncounterSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true 
    },
    players: [playerSchema],
    monsters: [monsterSchema]
});

const EncounterModel = mongoose.model('encounter', EncounterSchema);

module.exports = EncounterModel;