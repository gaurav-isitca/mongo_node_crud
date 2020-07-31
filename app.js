const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const session = require('express-session');
require('dotenv/config');


var IndexParser = require('./routes/index');
const { localsName } = require('ejs');

const app = express();

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true , useFindAndModify:false}, (err, res)=>{
    if (err){
        console.log('Not Connected to Database');
    }
    else{
        console.log("Connected to Database");
    }
});

// set view file
app.set('views', path.join(__dirname, 'views'));

// set engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use('/', IndexParser);


app.listen(3000);
