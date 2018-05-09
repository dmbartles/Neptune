// require external modules
var express = require('express');
const mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cookieparser = require('cookie-parser');
var session = require('express-session');
require('dotenv').config();

// require core modules
var path = require('path');
var url = require('url');

// require internal Modules
var creatives = require('./routes/creatives');
var apicreatives = require('./routes/api/api-creatives');
var Creative = require('./models/creativeModel');

// create express object
var app = express();

// set up sessions and cookies
app.use(cookieparser('pluto'));
app.use(session({
  secret:"pluto",
  resave: "true",
  saveUninitialized: "true"
}));

// connect to mongodb
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-shard-00-00-pyb2q.mongodb.net:27017,cluster0-shard-00-01-pyb2q.mongodb.net:27017,cluster0-shard-00-02-pyb2q.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`);
var db = mongoose.connection;
db.on('error', (err)=>{console.error(`connection error:${err}`);});
db.once('open', function() {
  console.log('connected to', db )
});
// set up body-parser
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// tells express where to find the views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');  // tells express to use pug as the template engine

// set up routes
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/api/creatives', apicreatives);
app.use('/creatives', creatives);
app.use('/',express.static('../client/dist'));


app.use((req, res, next)=>{
  console.log("/notfound");
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
