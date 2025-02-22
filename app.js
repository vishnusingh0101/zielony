const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const compression = require('compression');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const errorControl = require('./controller/error');
const contactRoute = require('./routes/contactroute');

app.use(cors());
app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                baseUri: ["'self'"],
                fontSrc: ["'self'", "https:", "data:"],
                formAction: ["'self'"],
                frameAncestors: ["'self'"],
                imgSrc: ["'self'", "data:", "https://d2tkmgv9tsam7v.cloudfront.net"],
                objectSrc: ["'none'"],
                scriptSrc: [
                    "'self'", 
                    "https://kit.fontawesome.com", 
                    "https://unpkg.com",  
                    "'sha256-RtKLN/h8jiE5wcWV5HwkiiEEAFvM9rJ264+yZw8Vqgo='" 
                ],
                scriptSrcElem: [
                    "'self'", 
                    "https://kit.fontawesome.com", 
                    "https://unpkg.com",
                    "'sha256-RtKLN/h8jiE5wcWV5HwkiiEEAFvM9rJ264+yZw8Vqgo='" 
                ],
                scriptSrcAttr: ["'none'"],
                styleSrc: [
                    "'self'", 
                    "https:", 
                    "'unsafe-inline'", 
                    "https://ka-f.fontawesome.com"
                ],
                connectSrc: ["'self'", "https://ka-f.fontawesome.com"],
                upgradeInsecureRequests: [],
            },
        },
    })
);

app.use(compression());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'frontend'), {
    maxAge: '1d', // Cache for 1 day
    etag: false
}));

// Routes
app.use('/user', contactRoute);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'home.html'));
});

app.use(errorControl.get404);

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('Database connection error:', err);
        process.exit(1); // Exit the app if DB connection fails
    });
