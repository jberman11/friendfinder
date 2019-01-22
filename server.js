var express = require("express");
var path = require("path");
var fs = require("fs");


var app = express();
var PORT = 3000

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app,path)
require("./app/routing/apiRoutes.js")(app,path)



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });