const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const errorControl = require('./controller/error');

const contactRoute = require('./routes/contactroute');

app.use(cors());
app.use(bodyParser.json({extended: false}));

app.use('/user', contactRoute);

app.use((req,res) => {
    if(req.url == '/'){
        res.sendFile(path.join(__dirname, `/frontend/home.html`));
    }else {
        res.sendFile(path.join(__dirname, `/frontend${req.url}`));
    }
})

app.use(errorControl.get404);

mongoose.connect(process.env.MONGODB)
    .then(result => {
        app.listen(3000);
    })
    .catch(err => console.log(err));