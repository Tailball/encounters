const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const EncounterModel = mongoose.model('encounter');


/**
 * Method:  GET
 * Route:   /api/encounters 
 */
router.get('/', async (req, res) => {
    const encounters = await EncounterModel.find({ userId: mongoose.Types.ObjectId(req.user._id) });
    res.json(encounters);
});


module.exports = router;