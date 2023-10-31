const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    itemName: {type: String},
    itemDescription: {type: String},
    itemCategory: {type: String},
    itemPrice: {type: String},
    itemSellerName: {type: String},
    itemSellerID: {type: String}
})

module.exports = mongoose.model("Item", ItemSchema);