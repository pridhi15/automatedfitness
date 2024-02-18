const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:String,
    phonenumber:String,
    address:String,
    city:String,
    country:String,
});

const User= mongoose.model('User', userDetailsSchema);

module.exports = User;
