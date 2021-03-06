var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan 	 = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var connect = require('connect');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://poojapatel1808:Jaijalaram#18@travelnow-shard-00-00-rmibq.mongodb.net:27017/test?ssl=true&replicaSet=TravelNow-shard-0&authSource=admin';

var configDB = require('./config/database.js');

// configuration 
MongoClient.connect(url, function(err, db) {
	if(err) throw err; 
});  

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ 
	secret: 'travelnow',
	resave: false,
	saveUninitialized: true  
})); 

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// routes 
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch 
app.listen(port);
console.log('Server is running on ' + port);

