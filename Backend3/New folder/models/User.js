
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const { lowerCase } = require('lodash');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    email: {
        type: String,
        require: true,
    },
    contact: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 1024
    },
    userType: {
        type: String,
        require: true
    },
    imgurl: {
        type: String,
     
    }

})


const User = mongoose.model('User', userSchema);
exports.User = User;