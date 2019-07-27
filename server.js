const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT ||3000;


// setup view engine
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res)=> {
    res.render('home');
});

app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/contact', (req,res) => {
    res.render('contact');
});

app.listen(PORT, () => {
    console.log(`'Server is running on port' ${PORT}`);
});