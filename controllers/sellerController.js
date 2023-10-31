const asyncHandler = require('express-async-handler');
const ItemSchema = require('../models/item');
const SellerSchema = require('../models/seller');

exports.get_add_seller = asyncHandler( async(req, res, next) => {

    res.render("add_seller");
})

exports.get_all_sellers = asyncHandler( async(req, res, next) => {
    const allSellers = await SellerSchema.find().exec();
    res.render("all_sellers", {seller_list: allSellers});
})

exports.create_new_seller = asyncHandler( async(req, res, next) => {
    const seller = new SellerSchema({
        sellerUsername: req.body.sellerUsername,
        sellerName: req.body.sellerName,
        sellerEmail: req.body.sellerEmail,
        sellerPhone: req.body.sellerPhone
    });
    await seller.save();
    const allSellers = await SellerSchema.find().exec();
    res.render("all_sellers" , {seller_list: allSellers});
})

exports.get_view_seller = asyncHandler( async(req, res, next) => {
    const seller = await SellerSchema.findOne({_id: req.params.id}).exec();
    const items = await ItemSchema.find({itemSellerName: seller.sellerName}).exec();

    res.render("view_seller", {seller: seller, items: items});
})