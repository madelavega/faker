// Faker init.
console.log("----------------------------------------------------------------");
console.log("Faker 0.0.0");
console.log("----------------------------------------------------------------");


// Require the Express NodeJS module.
var express = require('express');
console.log("Express (NodeJS module) loaded.");

// And create our Express app instance.
var app = express();

var apiRouter = require('./libs/router/api');
app.use('/api', apiRouter);

console.log();
console.log("Starting server at localhost:3000");
app.listen(3000);