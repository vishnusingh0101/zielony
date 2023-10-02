const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const surveySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    companyname: {
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
    chooseanindustryorapplication: {
        type: String,
        required: true
    },
    lengthofcoolingarea: {
        type: String,
        required: true
    },
    widthofcoolingarea: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('survey', surveySchema);
