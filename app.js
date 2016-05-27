var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash'); //in a word, this is used to make a piece message available on the next page

var routes= require('./routes');


var app = express();
mongoose.connect("mongodb://localhost:27017/test");
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(session({
    secret:'wweiojweiojwefjiojwiefjwiofjci.ve[',
    resave: true,
    saveUninitialized: true
}));


app.use(flash());
app.use(routes);

app.listen(app.get("port"), function () {
    console.log("app started at: "+app.get("port"));
});
