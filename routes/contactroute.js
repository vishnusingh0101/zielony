const express = require('express');

const router = express.Router();

const contactControl = require('../controller/contact')
const surveyControl = require('../controller/free-site-survay')
const entryControl = require('../controller/product-and-sales')
const associateDetail = require('../controller/become-an-associate')

router.post('/addContact',  contactControl.addContact);
router.post('/customercare',  contactControl.getInTouch);
router.post('/addSurvey',  surveyControl.addSurvey);
router.post('/addEntry',  entryControl.addEntry);
router.post('/associatedetail',  associateDetail.addassociatedetail);

module.exports = router;