const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userFirstName: {type: String},
    userLastName: {type: String},
    userEmail: {type: String},
    userItems: []
})

module.exports = mongoose.model("User", UserSchema);