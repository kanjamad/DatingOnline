const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Load models
const Message = require('./models/message');

const app = express();
// load keys file
const Keys = require('./config/keys');
// Use body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// connect to mLab MongoDB
// mongoose.connect(Keys.MongoDB,{useNewUrlParser:true}).then(() => {
//     console.log('Server is connected to MongoDB');
// }).catch((err) => {
//     console.log(err);
// });


// 
const DB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/onlinedating-server';
mongoose.connect(DB_URL, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: false })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log(err));
// environment var for port
const port = process.env.PORT || 3000;


// setup view engine
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res)=> {
    res.render('home', {
        title: 'Home'
    });
});

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About'
    });
});

app.get('/contact', (req,res) => {
    res.render('contact', {
        title: 'Contact'
    });
});

app.post('/contactUs', (req,res) => {
    console.log(req.body);
});

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});