var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/courses', function(req, res) {
    res.render('courses');
});

app.listen(3000);