const logIncoming = (req, res, next) => {
    console.log('incoming logged');
    next();
};

module.exports = logIncoming;