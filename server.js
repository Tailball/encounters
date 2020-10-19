require('dotenv').config();


//LIBRARIES
const express = require('express');

require('./database/models/Users/User.model');
require('./database/models/Encounters/Encounter.model');
const mongoose = require('mongoose');

const authenticate = require('./middleware/authenticate.middleware');


//SERVER START
const server = express();


//CONFIGURATION
server.use(require('./middleware/logger.middleware'));
server.use(express.json());


//ROUTING
server.use('/api/users', authenticate, require('./routes/users.routes'));
server.use('/api/encounters', authenticate, require('./routes/encounters.routes'));
server.use('/api/auth', require('./routes/auth.routes'));

//STATIC SERVING (+ react router sending index.html back on every unknown route)
server.use('/', express.static('./client/dist'));
server.get('*', (req, res) =>  res.sendFile('index.html', {root: './client/dist'}));


//DATABASE SET UP
const connection = process.env.DB
                    .replace('<user>', process.env.DBUSER)
                    .replace('<password>', process.env.DBPASSWORD);

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(connection, connectionOptions, err => {
        if(err) console.log('Error connecting DB', err);
        else console.log('Connected to database');
});


//HOSTING
const port = process.env.PORT || 3000;
server.listen(port, () => { console.log(`Server is up and running on port ${port}`) });