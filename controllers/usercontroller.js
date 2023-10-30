const asyncHandler = require('express-async-handler');
const UserSchema = require('../models/user');

exports.get_add_user = asyncHandler( async(req, res, next) => {

    res.render("add_user");
})

exports.get_all_users = asyncHandler( async(req, res, next) => {
    const allUsers = await UserSchema.find().exec();
    res.render("all_users", {user_list: allUsers});
})

exports.create_new_user = asyncHandler( async(req, res, next) => {
    const user = new UserSchema({
        userFirstName: req.body.userFirstName,
        userLastName: req.body.userLastName,
        userEmail: req.body.userEmail
    });
    await user.save();
    const allUsers = await UserSchema.find().exec();
    res.render("all_users" , {user_list: allUsers});
})

exports.get_view_user = asyncHandler( async(req, res, next) => {
    const user = await UserSchema.findOne({_id: req.params.id}).exec();
    res.render("view_user", {user: user});
})