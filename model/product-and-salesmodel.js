const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const salesSchema = new Schema({
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
    inquirydetails: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('sale', salesSchema);

