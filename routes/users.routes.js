const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const UserModel = mongoose.model('user');


/**
 * Method:  GET
 * Route:   /api/users
 */
router.get('/', async (req, res) => {
    const users = await UserModel.find({}); //TODO clear this
    res.json(users);
});


module.exports = router;