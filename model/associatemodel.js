const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const associateSchema = new Schema({
    option: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    companyname: {
        type: String,
        required: true
    },
    natureofbusiness: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: Number,
        required: true
    },
    emailid: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('associatedetail', associateSchema);
