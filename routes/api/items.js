const express = require('express');
const router  = express.Router();

// require model Item
//const Item_model = require('../../models/Item_model');

// @route   GET api : route/api/item
// @desc    Get all Item_model
// @access  Public
router.get('/', (req, res) => {
    // Item_model.find()
    //     .sort({date: -1})
    //     .then(items => res.json(items))
    // ;
    res.json({ message: 'hooray! welcome to our api!' });
});



module.exports = router;