const express = require('express');
const router = express.Router();


/**
 * Method:  GET
 * Route:   /api/encounters 
 */
router.get('/', (req, res) => {
    res.send('Hello from encounters');
});


module.exports = router;