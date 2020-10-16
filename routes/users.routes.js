const express = require('express');
const router = express.Router();

/**
 * Method:  GET
 * Route:   /api/users
 */
router.get('/', (req, res) => {
    res.send('hello from users');
});


module.exports = router;