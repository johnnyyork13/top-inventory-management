const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SellerSchema = new Schema({
    sellerUsername: {type: String},
    sellerName: {type: String},
    sellerEmail: {type: String},
    sellerPhone: {type: String},
    sellerItems: []
})

module.exports = mongoose.model("Seller", SellerSchema);