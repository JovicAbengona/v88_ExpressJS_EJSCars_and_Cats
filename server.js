var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(__dirname + "/static"));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/cars", function(request, response){
    response.render('cars');
});

app.get("/cars/new", function(request, response){
    response.render('form');
});

app.get("/cats", function(request, response){
    response.render('cats');
});

app.use(function(request, response){
    response.render('404');
});

app.listen(8080, function(){
    console.log("Listening on 8080");
});