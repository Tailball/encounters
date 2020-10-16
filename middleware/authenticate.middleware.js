const mongoose = require('mongoose');
const userModel = mongoose.model('user');

const _sr = require('../util/serverResponse');


const authenticate = async (req, res, next) => {
    const authtoken = req.headers['auth-token'];

    const foundUser = await userModel.findOne({ token: authtoken });
    if(!foundUser) return res.json(_sr.createFailureNotAuthorizedResponse());
    
    req.user = { 
        accountname: foundUser.accountname, 
        _id: foundUser._id, 
        email: foundUser.email 
    };
    
    next();
};

module.exports = authenticate;