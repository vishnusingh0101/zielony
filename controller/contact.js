const Contact = require('../model/contactmodel');
const Custdata = require('../model/custData');

const addContact = async (req, res, next) => {
    try {

        const contact = new Contact({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mobile: req.body.mobile,
            email: req.body.email,
            state: req.body.state,
            pincode: req.body.pincode,
            message: req.body.message
        });
        contact.save()
            .then(result => {
                res.status(200).json({ status: true });
            })
    } catch (err) {
        res.status(500).json({ error: err, status: false, message: 'server error' });
    };
}

const getInTouch = async (req, res, next) => {
    try {

        const custdata = new Custdata({
            custname: req.body.custname,
            mobile: req.body.mobile
        });
        custdata.save()
            .then(result => {
                res.status(200).json({ status: true , data: result});
                console.log(result);
            })
    } catch (err) {
        res.status(500).json({ error: err, status: false, message: 'server error' });
    };
}

module.exports = {addContact, getInTouch};