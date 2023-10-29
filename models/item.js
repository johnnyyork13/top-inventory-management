const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {type: String},
    description: {type: String},
    category: {type: String},
    price: {type: Number},
})

module.exports = mongoose.model("Item", ItemSchema);