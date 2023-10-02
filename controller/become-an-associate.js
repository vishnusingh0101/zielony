const Associate = require('../model/associatemodel');

const addassociatedetail = async (req, res, next) => {
    try {

        console.log(req.body.option);
        const associate = new Associate({
            option: req.body.option,
            name: req.body.name,
            companyname: req.body.companyname,
            natureofbusiness: req.body.natureofbusiness,
            designation: req.body.designation,
            mobilenumber: req.body.mobilenumber,
            emailid: req.body.emailid,
            address: req.body.address,
            pincode: req.body.pincode,
            message: req.body.message,
        });
        associate.save()
            .then(result => {
                res.status(200).json({ status: true });
            })
    } catch (err) {
        res.status(500).json({ error: err, status: false, message: 'server error' });
    };
}

module.exports = {addassociatedetail};