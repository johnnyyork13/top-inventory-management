const asyncHandler = require('express-async-handler');

exports.get_add_user = asyncHandler( async(req, res, next) => {

    res.render("add_user");
})

exports.get_all_users = asyncHandler( async(req, res, next) => {

    res.render("all_users");
})