const asyncHandler = require('express-async-handler');

exports.get_add_category = asyncHandler(async(req, res, next) => {

    res.render('add_category');
})

exports.get_all_categories = asyncHandler(async(req, res, next) => {
    
    res.render('all_categories');
})