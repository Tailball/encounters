const logIncoming = (req, res, next) => {
    console.log(`${req.method} to ${req.hostname} ${req.path} from ${req.ip}`);
    next();
};

module.exports = logIncoming;