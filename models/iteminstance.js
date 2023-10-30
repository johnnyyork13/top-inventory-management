const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemInstanceSchema = new Schema({
    itemName: {type: Schema.Types.ObjectId, ref: "Item", required: true},
    sellerName: {type: Schema.Types.ObjectId, ref: "Seller", required: true},
})

module.exports = mongoose.model('ItemInstance', ItemInstanceSchema);