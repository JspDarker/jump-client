// create obj in mongoose
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

// create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// execute query
module.exports = Item_model = mongoose.model('item', ItemSchema);