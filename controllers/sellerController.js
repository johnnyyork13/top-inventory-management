const asyncHandler = require('express-async-handler');
const ItemSchema = require('../models/item');
const SellerSchema = require('../models/seller');

exports.get_add_seller = asyncHandler( async(req, res, next) => {
    res.render("add_seller", {alertMessage: ""});
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
    const checkSellers = await SellerSchema.findOne({sellerUsername: req.body.sellerUsername}).exec();
    const allSellers = await SellerSchema.find().exec();
    if (checkSellers) {
        res.render("add_seller", {alertMessage: "alert-message"});
    } else {
        await seller.save();
        res.render("all_sellers" , {seller_list: allSellers});
    }
})

exports.delete_items = asyncHandler( async(req, res, next) => {
    if (typeof req.body._id === 'object') {
        req.body._id.forEach(async (id) => {
            await ItemSchema.deleteOne({_id: id}).exec();
        })
    } else {
        await ItemSchema.deleteOne({_id: req.body._id}).exec();
    }
    const seller = await SellerSchema.findOne({_id: req.params.id}).exec();
    const items = await ItemSchema.find({itemSellerName: seller.sellerName}).exec();
    res.render('view_seller', {seller: seller, items: items, alertClass: ""});
})

exports.get_view_seller = asyncHandler( async(req, res, next) => {
    const seller = await SellerSchema.findOne({_id: req.params.id}).exec();
    const items = await ItemSchema.find({itemSellerName: seller.sellerName}).exec();

    res.render("view_seller", {seller: seller, items: items, alertClass: ""});
})

exports.get_update_seller = asyncHandler( async(req, res, next) => {
    const seller = await SellerSchema.findOne({_id: req.params.id}).exec();
    res.render("update_seller", {seller: seller})
})

exports.post_update_seller = asyncHandler( async(req, res, next) => {
    await SellerSchema.updateOne({_id: req.params.id}, {
        _id: req.params.id,
        sellerUsername: req.body.sellerUsername,
        sellerName: req.body.sellerName,
        sellerEmail: req.body.sellerEmail,
        sellerPhone: req.body.sellerPhone
    }).exec();
    const updatedSeller = await SellerSchema.findOne({_id: req.params.id}).exec();
    const items = await ItemSchema.find({itemSellerName: updatedSeller.sellerName}).exec();
    res.render("view_seller", {seller: updatedSeller, items: items, alertClass: ""});
})

exports.get_delete_seller = asyncHandler( async(req, res, next) => {
    const getItems = await ItemSchema.find({itemSellerID: req.params.id}).exec();
    if (getItems.length > 0) {
        const seller = await SellerSchema.findOne({_id: req.params.id}).exec();
        res.render("view_seller", {seller: seller, items: getItems, alertClass: "alert-class"})
    } else {
        await SellerSchema.deleteOne({_id: req.params.id}).exec();
        const allSellers = await SellerSchema.find().exec();
        res.render("all_sellers", {seller_list: allSellers});
    }
})