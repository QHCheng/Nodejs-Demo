var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set('view', './views');
app.set('view engine', 'jade');
