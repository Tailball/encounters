const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const UserModel = mongoose.model('user');


/**
 * Method:  GET
 * Route:   /api/users
 */
router.get('/', async (req, res) => {
    const users = await UserModel.findById(req.user._id);
    res.json(users);
});


module.exports = router;