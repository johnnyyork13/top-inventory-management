const asyncHandler= require('express-async-handler');
const ItemSchema = require('../models/item');

exports.get_add_item = asyncHandler((req, res, next) => {
    res.render('add_item', {title: "Add Item"})
})

exports.post_add_item = asyncHandler(async(req, res, next) => {
    const item = new ItemSchema({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
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
    res.render('item_page', {item: item})
})