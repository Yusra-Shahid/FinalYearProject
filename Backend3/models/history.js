const mongoose = require('mongoose');
const HistorySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    contact: {
        type: String,
    },
    doctoremail: {
        type: String,
    },
    timeslote: {
        type: String,
    },
    UserEmail:{
        type:string,
    },
    date:{
        type:string,
    },
    link:{
        type:string,
    }
})
const History = mongoose.model('History', HistorySchema);
exports.History = History;