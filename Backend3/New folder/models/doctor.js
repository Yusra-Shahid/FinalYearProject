
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,


    },
    contact: {
        type: String,

    },
    email: {
        type: String,


    },
    password: {
        type: String,

    },

    userType: {
        type: String,

    },
    specaility: {
        type: String,


    },
    exprience: {
        type: String,

    },
    age: {
        type: Number,

    },
    fee: {
        type: Number,


    },
    account: {
        type: String

    },
    timeslote: {
        type: String
    }
    // m_time: {
    //     type: String,

    // },
    // a_time: {
    //     type: String,

    // },
    // e_time: {
    //     type: String,
    // }


})

const Doctor = mongoose.model('Doctor', userSchema);
exports.Doctor = Doctor;