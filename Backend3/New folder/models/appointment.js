
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
// const config=require('config');
// const { lowerCase } = require('lodash');

const userSchema = new mongoose.Schema({
    Date: {
        type: Date,
        require: true,

    },
    day: {
        type: String,
        require: true,
    },
    Time: {
        type: String,
        require: true,

    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },


})


const Appointment = mongoose.model('appointment', userSchema);
exports.Appointment = Appointment;