const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const custData = new Schema({
    custname: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('custData', custData);
