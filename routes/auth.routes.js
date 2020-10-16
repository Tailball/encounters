const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const userModel = mongoose.model('user');

const _sr = require('../util/serverResponse');


//1. see if token is still valid (post)
/**
 * Method:  POST
 * Route:   /api/auth/token 
 * PostData: { email, token }
 */
router.post('/token', async (req, res) => {
    const { email, token } = req.body;
    if(!email || !token) return res.json(_sr.createFailureResponse('Incorrect data supplied'));

    try {
        const user = await userModel.findOne({ email });

        if(!user) return res.json(_sr.createFailureNotFoundResponse());

        const isValid = token === user.token;
        return res.json(_sr.createSuccessDataResponse({ isValid }));
    }
    catch(err) {
        return res.status(500).json(_sr.createFailureResponse(err));
    }
});

//2. log in with email and password (post)
/**
 * Method:  POST
 * Route:   /api/auth 
 * PostData: { email, password }
 */
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) return res.json(_sr.createFailureResponse('Incorrect data supplied'));

    try {
        const user = await userModel.findOne({ email });

        if(!user) return res.json(_sr.createFailureNotFoundResponse());
        if(user.password !== password) return res.json(_sr.createFailureBadAuthResponse());

        user.token = `${new mongoose.Types.ObjectId()}`;
        const savedUser = await user.save();

        return res.json(_sr.createSuccessDataResponse({ token: savedUser.token }));
    }
    catch(err) {
        res.status(500).json(_sr.createFailureResponse(err));
    }
});

module.exports = router;