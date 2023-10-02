const Survey = require('../model/free-site-surveymodel');
const mongoose = require('mongoose');

const addSurvey = async (req, res, next) => {
    try {

        const survey = new Survey({
            name: req.body.name,
            companyname: req.body.companyname,
            mobilenumber: req.body.mobilenumber,
            emailid: req.body.emailid,
            address: req.body.address,
            pincode: req.body.pincode,
            chooseanindustryorapplication: req.body.chooseanindustryorapplication,
            lengthofcoolingarea: req.body.lengthofcoolingarea,
            widthofcoolingarea: req.body.widthofcoolingarea,
            message: req.body.message
        });
        survey.save()
            .then(result => {
                res.status(200).json({ status: true });
            })
    } catch (err) {
        res.status(500).json({ error: err, status: false, message: 'server error' });
    };
}

module.exports = { addSurvey };