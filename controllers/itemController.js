const asyncHandler= require('express-async-handler');
const ItemSchema = require('../models/item');
const SellerSchema = require('../models/seller');
const CategorySchema = require('../models/category');

exports.get_add_item = asyncHandler(async (req, res, next) => {
    const allSellers = await SellerSchema.find().exec();
    const allCategories = await CategorySchema.find().exec();
    res.render('add_item', {title: "Add Item", seller_list: allSellers, category_list: allCategories})
})

exports.post_add_item = asyncHandler(async(req, res, next) => {
    console.log(req);
    const seller = await SellerSchema.findOne({_id: req.body.sellerID}).exec();
    const item = new ItemSchema({
        itemName: req.body.itemName,
        itemDescription: req.body.itemDescription,
        itemCategory: req.body.itemCategory,
        itemPrice: req.body.itemPrice,
        itemSellerName: seller.sellerName,
        itemSellerID: req.body.sellerID
    })
    await item.save();
    const allItems = await ItemSchema.find().exec();
    res.render('all_items', {item_list: allItems})
})

exports.delete_item = asyncHandler(async (req, res, next) => {
    await ItemSchema.deleteOne({_id: req.params.id})
    const allItems = await ItemSchema.find().exec();
    res.render('all_items', {item_list: allItems});
})

exports.get_all_items = asyncHandler(async (req, res, next) => {
    const allItems = await ItemSchema.find().exec();
    res.render('all_items', {item_list : allItems});
})

exports.view_item = asyncHandler(async (req, res, next) => {
    const item = await ItemSchema.findOne({_id: req.params.id}).exec();
    console.log(item);
    res.render('view_item', {item: item})
})