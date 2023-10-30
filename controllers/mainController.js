const UserSchema = require('../models/seller');
const ItemSchema = require('../models/item');
const CategorySchema = require('../models/category');
const ItemInstanceSchema =- require('../models/iteminstance');

const asyncHandler = require('express-async-handler');

exports.get_home = asyncHandler( async(req, res, next) => {
    const countArray = await Promise.all([
        UserSchema.find().count().exec(),
        ItemSchema.find().count().exec(),
        CategorySchema.find().count().exec(),
    ])
    const allCounts = {
        userCount: countArray[0],
        itemCount: countArray[1],
        categoryCount: countArray[2]
    }
    res.render('index', {allCounts: allCounts})
})