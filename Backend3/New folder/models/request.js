
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Date: {
        type: String,
        require: true,

    },
    Time: {
        type: String,
        require: true,

    },
    patient: {
        type: String,
        require: true
    },
    doctor: {
        type: String,
        require: true
    },
    status: {
        type: String,
        default: 'pending'
    },

})


const Request = mongoose.model('Request', userSchema);
exports.Request = Request;