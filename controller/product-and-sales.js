const Entry = require('../model/product-and-salesmodel');

const addEntry = async (req, res, next) => {
    try {
        const product = new Entry({
            name: req.body.name,
            companyname: req.body.companyname,
            natureofbusiness: req.body.natureofbusiness,
            designation: req.body.designation,
            mobilenumber: req.body.mobilenumber,
            emailid: req.body.emailid,
            address: req.body.address,
            pincode: req.body.pincode,
            inquirydetails: req.body.inquirydetails,
        });

        product.save()
            .then(result => {
                res.status(200).json({ status: true });
            })
    } catch (err) {
        res.status(500).json({ error: err, status: false, message: 'server error' });
    };
}

module.exports = { addEntry };