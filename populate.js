require('dotenv').config();

const user = require('./database/models/Users/User.model');
const encounter = require('./database/models/Encounters/Encounter.model');
const mongoose = require('mongoose');
const PlayerSchema = require('./database/models/Encounters/Player.schema');

const connection = process.env.DB
                       .replace('<user>', process.env.DBUSER)
                       .replace('<password>', process.env.DBPASSWORD);

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(connection, dbOptions, onConnected);

async function onConnected(err) {
    if(err) {
        console.log(err);
        return;
    }

    console.log('Connected to database');

    console.log('Clearing collections');
    await user.deleteMany({});
    await encounter.deleteMany({});
    console.log('Cleared collections');

    console.log();

    console.log('Creating user 1');
    await createUser1();
    console.log('Done creating user 1');

    console.log('Creating user 2');
    await createUser2();
    console.log('Done creating user 2');

    mongoose.disconnect();
    console.log('Disconnected. All done');
}

async function createUser(accountname, password, email) {
    const newUser = new user({
        accountname,
        email,
        password
    });

    return await newUser.save();
}

async function createEncounter(userId, players, monsters) {
    const newEncounter = new encounter({
        userId: new mongoose.Types.ObjectId(userId),
        players,
        monsters
    });

    return await newEncounter.save();
}

function createPlayer(level) {
    return {
        level
    };
}

function createMonster(name, cr, xp, source, initiative) {
    return {
        name,
        cr,
        xp,
        source,
        initiative
    };
}

async function createUser1() {
    const user = await createUser('fluffy', '12345', 'fluffy@mail.com');
    await createEncounter(user._id, [
        createPlayer(3),
        createPlayer(4)
    ], [
        createMonster('Big bad monster', 2, 500),
        createMonster('Big bad monster two', 3, 650, 'MM 162'),
        createMonster('Big bad monster three', 4, 1000)
    ]);
}

async function createUser2() {
    const user = await createUser('mary', '12345', 'mary@mail.com');
    await createEncounter(user._id, [
        createPlayer(5),
        createPlayer(5),
        createPlayer(5),
        createPlayer(5)
    ], [
        createMonster('demon', 10, 30000, 'XGtE 210', 19),
        createMonster('demon slave', 1, 100, 'XGtE 209', 16),
        createMonster('demon slave', 1, 100, 'XGtE 209', 15),
    ]);
}