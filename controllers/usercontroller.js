const asyncHandler = require('express-async-handler');

exports.view_user = asyncHandler( async(req, res, next) => {
    
    res.render('view_user', {title: User})
})