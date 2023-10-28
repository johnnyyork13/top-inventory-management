const asyncHandler= require('express-async-handler');
const ItemSchema = require('../models/item');

exports.create_item = asyncHandler((req, res, next) => {
    const item = new ItemSchema({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        numItems: req.body.numItems
    })
    res.render('all_items', {item: item})
})

exports.get_all_items = asyncHandler((req, res, next) => {
    res.render('all_items')
})