var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = 4001

app.use(express.urlencoded({extended: true}));
app.use(express.json());

