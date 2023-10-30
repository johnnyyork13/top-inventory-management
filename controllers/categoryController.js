const asyncHandler = require('express-async-handler');
const CategorySchema = require('../models/category');

exports.get_add_category = asyncHandler(async(req, res, next) => {

    res.render('add_category');
})

exports.post_add_category = asyncHandler( async(req, res, next) => {
    const category = new CategorySchema({
        categoryName: req.body.categoryName,
        categoryDescription: req.body.categoryDescription
    })
    await category.save();
    const allCategories = await CategorySchema.find().exec();
    res.render('all_categories', {category_list: allCategories})
})

exports.get_view_category = asyncHandler( async(req, res, next) => {
    const category = await CategorySchema.findOne({_id: req.params.id}).exec();
    res.render('view_category', {category: category})
})

exports.get_all_categories = asyncHandler(async(req, res, next) => {
    const allCategories = await CategorySchema.find().exec();
    res.render('all_categories', {category_list: allCategories});
})