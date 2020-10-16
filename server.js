const express = require('express');
const server = express();


//CONFIGURATION
server.use(require('./middleware/logger.middleware'));
server.use(express.json());


//ROUTING
server.use('/api/users', require('./routes/users.routes'));
server.use('/api/encounters', require('./routes/encounters.routes'));

//STATIC SERVING
server.use('/', express.static('./client/dist'));


//HOSTING
const port = process.env.PORT || 3000;
server.listen(port, () => { console.log(`Server is up and running on port ${port}`) });